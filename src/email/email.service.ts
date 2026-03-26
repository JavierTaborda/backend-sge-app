import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Resend } from 'resend';

@Injectable()
export class EmailService {
    private resend = new Resend(process.env.RESEND_API_KEY);
    private smtp = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        connectionTimeout: 5000,
    });

    private provider = process.env.EMAIL_PROVIDER || 'resend';
   
    async sendEmail(to: string | string[], subject: string, html: string) {
        if (this.provider === 'smtp') {
            try {
                //console.log('try SMTP...');
                return await this.sendSMTP(to, subject, html);
            } catch (error) {
                //console.error('SMTP fail, trying Resend...', error);
                return await this.sendResend(to, subject, html);
            }
        }

        try {  
            //console.log('try resend...');
            return await this.sendResend(to, subject, html);
        } catch (error) {
        
            return await this.sendSMTP(to, subject, html);
        }
    }

    // RESEND
    private async sendResend(to: string | string[], subject: string, html: string) {
        return this.resend.emails.send({
            from: '"plataforma SGE" <no-responder@app.friginet.xyz>',
            to,
            subject,
            html,
        });
    }

    // SMTP 
    private async sendSMTP(to: string | string[], subject: string, html: string) {
        const mail = process.env.SMTP_USER;
        return this.smtp.sendMail({
            from: `"plataforma SGE" <${mail}>`,
            to,
            subject,
            html,
        });
    }

} 