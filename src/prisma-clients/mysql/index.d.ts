
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model cbdevoluciones
 * 
 */
export type cbdevoluciones = $Result.DefaultSelection<Prisma.$cbdevolucionesPayload>
/**
 * Model cbplanpagos
 * 
 */
export type cbplanpagos = $Result.DefaultSelection<Prisma.$cbplanpagosPayload>
/**
 * Model cbsolicimat
 * 
 */
export type cbsolicimat = $Result.DefaultSelection<Prisma.$cbsolicimatPayload>
/**
 * Model clbancoprov
 * 
 */
export type clbancoprov = $Result.DefaultSelection<Prisma.$clbancoprovPayload>
/**
 * Model clbancoswift
 * 
 */
export type clbancoswift = $Result.DefaultSelection<Prisma.$clbancoswiftPayload>
/**
 * Model clcategoria
 * 
 */
export type clcategoria = $Result.DefaultSelection<Prisma.$clcategoriaPayload>
/**
 * Model cltransporte
 * 
 */
export type cltransporte = $Result.DefaultSelection<Prisma.$cltransportePayload>
/**
 * Model clzonas
 * 
 */
export type clzonas = $Result.DefaultSelection<Prisma.$clzonasPayload>
/**
 * Model dtdevolucion
 * 
 */
export type dtdevolucion = $Result.DefaultSelection<Prisma.$dtdevolucionPayload>
/**
 * Model dtdevoluciones
 * 
 */
export type dtdevoluciones = $Result.DefaultSelection<Prisma.$dtdevolucionesPayload>
/**
 * Model hsplanpagos
 * 
 */
export type hsplanpagos = $Result.DefaultSelection<Prisma.$hsplanpagosPayload>
/**
 * Model metas
 * 
 */
export type metas = $Result.DefaultSelection<Prisma.$metasPayload>
/**
 * Model mtclientes
 * 
 */
export type mtclientes = $Result.DefaultSelection<Prisma.$mtclientesPayload>
/**
 * Model mtprofitart
 * 
 */
export type mtprofitart = $Result.DefaultSelection<Prisma.$mtprofitartPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cbdevoluciones
 * const cbdevoluciones = await prisma.cbdevoluciones.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cbdevoluciones
   * const cbdevoluciones = await prisma.cbdevoluciones.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cbdevoluciones`: Exposes CRUD operations for the **cbdevoluciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cbdevoluciones
    * const cbdevoluciones = await prisma.cbdevoluciones.findMany()
    * ```
    */
  get cbdevoluciones(): Prisma.cbdevolucionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cbplanpagos`: Exposes CRUD operations for the **cbplanpagos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cbplanpagos
    * const cbplanpagos = await prisma.cbplanpagos.findMany()
    * ```
    */
  get cbplanpagos(): Prisma.cbplanpagosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cbsolicimat`: Exposes CRUD operations for the **cbsolicimat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cbsolicimats
    * const cbsolicimats = await prisma.cbsolicimat.findMany()
    * ```
    */
  get cbsolicimat(): Prisma.cbsolicimatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clbancoprov`: Exposes CRUD operations for the **clbancoprov** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clbancoprovs
    * const clbancoprovs = await prisma.clbancoprov.findMany()
    * ```
    */
  get clbancoprov(): Prisma.clbancoprovDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clbancoswift`: Exposes CRUD operations for the **clbancoswift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clbancoswifts
    * const clbancoswifts = await prisma.clbancoswift.findMany()
    * ```
    */
  get clbancoswift(): Prisma.clbancoswiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clcategoria`: Exposes CRUD operations for the **clcategoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clcategorias
    * const clcategorias = await prisma.clcategoria.findMany()
    * ```
    */
  get clcategoria(): Prisma.clcategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cltransporte`: Exposes CRUD operations for the **cltransporte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cltransportes
    * const cltransportes = await prisma.cltransporte.findMany()
    * ```
    */
  get cltransporte(): Prisma.cltransporteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clzonas`: Exposes CRUD operations for the **clzonas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clzonas
    * const clzonas = await prisma.clzonas.findMany()
    * ```
    */
  get clzonas(): Prisma.clzonasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dtdevolucion`: Exposes CRUD operations for the **dtdevolucion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dtdevolucions
    * const dtdevolucions = await prisma.dtdevolucion.findMany()
    * ```
    */
  get dtdevolucion(): Prisma.dtdevolucionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dtdevoluciones`: Exposes CRUD operations for the **dtdevoluciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dtdevoluciones
    * const dtdevoluciones = await prisma.dtdevoluciones.findMany()
    * ```
    */
  get dtdevoluciones(): Prisma.dtdevolucionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hsplanpagos`: Exposes CRUD operations for the **hsplanpagos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hsplanpagos
    * const hsplanpagos = await prisma.hsplanpagos.findMany()
    * ```
    */
  get hsplanpagos(): Prisma.hsplanpagosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metas`: Exposes CRUD operations for the **metas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metas
    * const metas = await prisma.metas.findMany()
    * ```
    */
  get metas(): Prisma.metasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mtclientes`: Exposes CRUD operations for the **mtclientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mtclientes
    * const mtclientes = await prisma.mtclientes.findMany()
    * ```
    */
  get mtclientes(): Prisma.mtclientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mtprofitart`: Exposes CRUD operations for the **mtprofitart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mtprofitarts
    * const mtprofitarts = await prisma.mtprofitart.findMany()
    * ```
    */
  get mtprofitart(): Prisma.mtprofitartDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    cbdevoluciones: 'cbdevoluciones',
    cbplanpagos: 'cbplanpagos',
    cbsolicimat: 'cbsolicimat',
    clbancoprov: 'clbancoprov',
    clbancoswift: 'clbancoswift',
    clcategoria: 'clcategoria',
    cltransporte: 'cltransporte',
    clzonas: 'clzonas',
    dtdevolucion: 'dtdevolucion',
    dtdevoluciones: 'dtdevoluciones',
    hsplanpagos: 'hsplanpagos',
    metas: 'metas',
    mtclientes: 'mtclientes',
    mtprofitart: 'mtprofitart'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cbdevoluciones" | "cbplanpagos" | "cbsolicimat" | "clbancoprov" | "clbancoswift" | "clcategoria" | "cltransporte" | "clzonas" | "dtdevolucion" | "dtdevoluciones" | "hsplanpagos" | "metas" | "mtclientes" | "mtprofitart"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cbdevoluciones: {
        payload: Prisma.$cbdevolucionesPayload<ExtArgs>
        fields: Prisma.cbdevolucionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cbdevolucionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbdevolucionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cbdevolucionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbdevolucionesPayload>
          }
          findFirst: {
            args: Prisma.cbdevolucionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbdevolucionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cbdevolucionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbdevolucionesPayload>
          }
          findMany: {
            args: Prisma.cbdevolucionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbdevolucionesPayload>[]
          }
          create: {
            args: Prisma.cbdevolucionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbdevolucionesPayload>
          }
          createMany: {
            args: Prisma.cbdevolucionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cbdevolucionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbdevolucionesPayload>
          }
          update: {
            args: Prisma.cbdevolucionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbdevolucionesPayload>
          }
          deleteMany: {
            args: Prisma.cbdevolucionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cbdevolucionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cbdevolucionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbdevolucionesPayload>
          }
          aggregate: {
            args: Prisma.CbdevolucionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCbdevoluciones>
          }
          groupBy: {
            args: Prisma.cbdevolucionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CbdevolucionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.cbdevolucionesCountArgs<ExtArgs>
            result: $Utils.Optional<CbdevolucionesCountAggregateOutputType> | number
          }
        }
      }
      cbplanpagos: {
        payload: Prisma.$cbplanpagosPayload<ExtArgs>
        fields: Prisma.cbplanpagosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cbplanpagosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbplanpagosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cbplanpagosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbplanpagosPayload>
          }
          findFirst: {
            args: Prisma.cbplanpagosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbplanpagosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cbplanpagosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbplanpagosPayload>
          }
          findMany: {
            args: Prisma.cbplanpagosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbplanpagosPayload>[]
          }
          create: {
            args: Prisma.cbplanpagosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbplanpagosPayload>
          }
          createMany: {
            args: Prisma.cbplanpagosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cbplanpagosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbplanpagosPayload>
          }
          update: {
            args: Prisma.cbplanpagosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbplanpagosPayload>
          }
          deleteMany: {
            args: Prisma.cbplanpagosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cbplanpagosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cbplanpagosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbplanpagosPayload>
          }
          aggregate: {
            args: Prisma.CbplanpagosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCbplanpagos>
          }
          groupBy: {
            args: Prisma.cbplanpagosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CbplanpagosGroupByOutputType>[]
          }
          count: {
            args: Prisma.cbplanpagosCountArgs<ExtArgs>
            result: $Utils.Optional<CbplanpagosCountAggregateOutputType> | number
          }
        }
      }
      cbsolicimat: {
        payload: Prisma.$cbsolicimatPayload<ExtArgs>
        fields: Prisma.cbsolicimatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cbsolicimatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbsolicimatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cbsolicimatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbsolicimatPayload>
          }
          findFirst: {
            args: Prisma.cbsolicimatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbsolicimatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cbsolicimatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbsolicimatPayload>
          }
          findMany: {
            args: Prisma.cbsolicimatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbsolicimatPayload>[]
          }
          create: {
            args: Prisma.cbsolicimatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbsolicimatPayload>
          }
          createMany: {
            args: Prisma.cbsolicimatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cbsolicimatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbsolicimatPayload>
          }
          update: {
            args: Prisma.cbsolicimatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbsolicimatPayload>
          }
          deleteMany: {
            args: Prisma.cbsolicimatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cbsolicimatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cbsolicimatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cbsolicimatPayload>
          }
          aggregate: {
            args: Prisma.CbsolicimatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCbsolicimat>
          }
          groupBy: {
            args: Prisma.cbsolicimatGroupByArgs<ExtArgs>
            result: $Utils.Optional<CbsolicimatGroupByOutputType>[]
          }
          count: {
            args: Prisma.cbsolicimatCountArgs<ExtArgs>
            result: $Utils.Optional<CbsolicimatCountAggregateOutputType> | number
          }
        }
      }
      clbancoprov: {
        payload: Prisma.$clbancoprovPayload<ExtArgs>
        fields: Prisma.clbancoprovFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clbancoprovFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoprovPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clbancoprovFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoprovPayload>
          }
          findFirst: {
            args: Prisma.clbancoprovFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoprovPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clbancoprovFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoprovPayload>
          }
          findMany: {
            args: Prisma.clbancoprovFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoprovPayload>[]
          }
          create: {
            args: Prisma.clbancoprovCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoprovPayload>
          }
          createMany: {
            args: Prisma.clbancoprovCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clbancoprovDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoprovPayload>
          }
          update: {
            args: Prisma.clbancoprovUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoprovPayload>
          }
          deleteMany: {
            args: Prisma.clbancoprovDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clbancoprovUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clbancoprovUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoprovPayload>
          }
          aggregate: {
            args: Prisma.ClbancoprovAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClbancoprov>
          }
          groupBy: {
            args: Prisma.clbancoprovGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClbancoprovGroupByOutputType>[]
          }
          count: {
            args: Prisma.clbancoprovCountArgs<ExtArgs>
            result: $Utils.Optional<ClbancoprovCountAggregateOutputType> | number
          }
        }
      }
      clbancoswift: {
        payload: Prisma.$clbancoswiftPayload<ExtArgs>
        fields: Prisma.clbancoswiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clbancoswiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoswiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clbancoswiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoswiftPayload>
          }
          findFirst: {
            args: Prisma.clbancoswiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoswiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clbancoswiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoswiftPayload>
          }
          findMany: {
            args: Prisma.clbancoswiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoswiftPayload>[]
          }
          create: {
            args: Prisma.clbancoswiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoswiftPayload>
          }
          createMany: {
            args: Prisma.clbancoswiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clbancoswiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoswiftPayload>
          }
          update: {
            args: Prisma.clbancoswiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoswiftPayload>
          }
          deleteMany: {
            args: Prisma.clbancoswiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clbancoswiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clbancoswiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clbancoswiftPayload>
          }
          aggregate: {
            args: Prisma.ClbancoswiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClbancoswift>
          }
          groupBy: {
            args: Prisma.clbancoswiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClbancoswiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.clbancoswiftCountArgs<ExtArgs>
            result: $Utils.Optional<ClbancoswiftCountAggregateOutputType> | number
          }
        }
      }
      clcategoria: {
        payload: Prisma.$clcategoriaPayload<ExtArgs>
        fields: Prisma.clcategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clcategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clcategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clcategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clcategoriaPayload>
          }
          findFirst: {
            args: Prisma.clcategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clcategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clcategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clcategoriaPayload>
          }
          findMany: {
            args: Prisma.clcategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clcategoriaPayload>[]
          }
          create: {
            args: Prisma.clcategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clcategoriaPayload>
          }
          createMany: {
            args: Prisma.clcategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clcategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clcategoriaPayload>
          }
          update: {
            args: Prisma.clcategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clcategoriaPayload>
          }
          deleteMany: {
            args: Prisma.clcategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clcategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clcategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clcategoriaPayload>
          }
          aggregate: {
            args: Prisma.ClcategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClcategoria>
          }
          groupBy: {
            args: Prisma.clcategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClcategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.clcategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<ClcategoriaCountAggregateOutputType> | number
          }
        }
      }
      cltransporte: {
        payload: Prisma.$cltransportePayload<ExtArgs>
        fields: Prisma.cltransporteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cltransporteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cltransportePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cltransporteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cltransportePayload>
          }
          findFirst: {
            args: Prisma.cltransporteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cltransportePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cltransporteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cltransportePayload>
          }
          findMany: {
            args: Prisma.cltransporteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cltransportePayload>[]
          }
          create: {
            args: Prisma.cltransporteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cltransportePayload>
          }
          createMany: {
            args: Prisma.cltransporteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cltransporteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cltransportePayload>
          }
          update: {
            args: Prisma.cltransporteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cltransportePayload>
          }
          deleteMany: {
            args: Prisma.cltransporteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cltransporteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cltransporteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cltransportePayload>
          }
          aggregate: {
            args: Prisma.CltransporteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCltransporte>
          }
          groupBy: {
            args: Prisma.cltransporteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CltransporteGroupByOutputType>[]
          }
          count: {
            args: Prisma.cltransporteCountArgs<ExtArgs>
            result: $Utils.Optional<CltransporteCountAggregateOutputType> | number
          }
        }
      }
      clzonas: {
        payload: Prisma.$clzonasPayload<ExtArgs>
        fields: Prisma.clzonasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clzonasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clzonasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clzonasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clzonasPayload>
          }
          findFirst: {
            args: Prisma.clzonasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clzonasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clzonasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clzonasPayload>
          }
          findMany: {
            args: Prisma.clzonasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clzonasPayload>[]
          }
          create: {
            args: Prisma.clzonasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clzonasPayload>
          }
          createMany: {
            args: Prisma.clzonasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clzonasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clzonasPayload>
          }
          update: {
            args: Prisma.clzonasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clzonasPayload>
          }
          deleteMany: {
            args: Prisma.clzonasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clzonasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clzonasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clzonasPayload>
          }
          aggregate: {
            args: Prisma.ClzonasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClzonas>
          }
          groupBy: {
            args: Prisma.clzonasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClzonasGroupByOutputType>[]
          }
          count: {
            args: Prisma.clzonasCountArgs<ExtArgs>
            result: $Utils.Optional<ClzonasCountAggregateOutputType> | number
          }
        }
      }
      dtdevolucion: {
        payload: Prisma.$dtdevolucionPayload<ExtArgs>
        fields: Prisma.dtdevolucionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dtdevolucionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dtdevolucionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionPayload>
          }
          findFirst: {
            args: Prisma.dtdevolucionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dtdevolucionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionPayload>
          }
          findMany: {
            args: Prisma.dtdevolucionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionPayload>[]
          }
          create: {
            args: Prisma.dtdevolucionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionPayload>
          }
          createMany: {
            args: Prisma.dtdevolucionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.dtdevolucionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionPayload>
          }
          update: {
            args: Prisma.dtdevolucionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionPayload>
          }
          deleteMany: {
            args: Prisma.dtdevolucionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dtdevolucionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dtdevolucionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionPayload>
          }
          aggregate: {
            args: Prisma.DtdevolucionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDtdevolucion>
          }
          groupBy: {
            args: Prisma.dtdevolucionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DtdevolucionGroupByOutputType>[]
          }
          count: {
            args: Prisma.dtdevolucionCountArgs<ExtArgs>
            result: $Utils.Optional<DtdevolucionCountAggregateOutputType> | number
          }
        }
      }
      dtdevoluciones: {
        payload: Prisma.$dtdevolucionesPayload<ExtArgs>
        fields: Prisma.dtdevolucionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dtdevolucionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dtdevolucionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionesPayload>
          }
          findFirst: {
            args: Prisma.dtdevolucionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dtdevolucionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionesPayload>
          }
          findMany: {
            args: Prisma.dtdevolucionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionesPayload>[]
          }
          create: {
            args: Prisma.dtdevolucionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionesPayload>
          }
          createMany: {
            args: Prisma.dtdevolucionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.dtdevolucionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionesPayload>
          }
          update: {
            args: Prisma.dtdevolucionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionesPayload>
          }
          deleteMany: {
            args: Prisma.dtdevolucionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dtdevolucionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dtdevolucionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dtdevolucionesPayload>
          }
          aggregate: {
            args: Prisma.DtdevolucionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDtdevoluciones>
          }
          groupBy: {
            args: Prisma.dtdevolucionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DtdevolucionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.dtdevolucionesCountArgs<ExtArgs>
            result: $Utils.Optional<DtdevolucionesCountAggregateOutputType> | number
          }
        }
      }
      hsplanpagos: {
        payload: Prisma.$hsplanpagosPayload<ExtArgs>
        fields: Prisma.hsplanpagosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hsplanpagosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsplanpagosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hsplanpagosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsplanpagosPayload>
          }
          findFirst: {
            args: Prisma.hsplanpagosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsplanpagosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hsplanpagosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsplanpagosPayload>
          }
          findMany: {
            args: Prisma.hsplanpagosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsplanpagosPayload>[]
          }
          create: {
            args: Prisma.hsplanpagosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsplanpagosPayload>
          }
          createMany: {
            args: Prisma.hsplanpagosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.hsplanpagosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsplanpagosPayload>
          }
          update: {
            args: Prisma.hsplanpagosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsplanpagosPayload>
          }
          deleteMany: {
            args: Prisma.hsplanpagosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hsplanpagosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.hsplanpagosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsplanpagosPayload>
          }
          aggregate: {
            args: Prisma.HsplanpagosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHsplanpagos>
          }
          groupBy: {
            args: Prisma.hsplanpagosGroupByArgs<ExtArgs>
            result: $Utils.Optional<HsplanpagosGroupByOutputType>[]
          }
          count: {
            args: Prisma.hsplanpagosCountArgs<ExtArgs>
            result: $Utils.Optional<HsplanpagosCountAggregateOutputType> | number
          }
        }
      }
      metas: {
        payload: Prisma.$metasPayload<ExtArgs>
        fields: Prisma.metasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.metasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.metasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metasPayload>
          }
          findFirst: {
            args: Prisma.metasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.metasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metasPayload>
          }
          findMany: {
            args: Prisma.metasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metasPayload>[]
          }
          create: {
            args: Prisma.metasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metasPayload>
          }
          createMany: {
            args: Prisma.metasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.metasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metasPayload>
          }
          update: {
            args: Prisma.metasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metasPayload>
          }
          deleteMany: {
            args: Prisma.metasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.metasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.metasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metasPayload>
          }
          aggregate: {
            args: Prisma.MetasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetas>
          }
          groupBy: {
            args: Prisma.metasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetasGroupByOutputType>[]
          }
          count: {
            args: Prisma.metasCountArgs<ExtArgs>
            result: $Utils.Optional<MetasCountAggregateOutputType> | number
          }
        }
      }
      mtclientes: {
        payload: Prisma.$mtclientesPayload<ExtArgs>
        fields: Prisma.mtclientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mtclientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtclientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mtclientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtclientesPayload>
          }
          findFirst: {
            args: Prisma.mtclientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtclientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mtclientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtclientesPayload>
          }
          findMany: {
            args: Prisma.mtclientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtclientesPayload>[]
          }
          create: {
            args: Prisma.mtclientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtclientesPayload>
          }
          createMany: {
            args: Prisma.mtclientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mtclientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtclientesPayload>
          }
          update: {
            args: Prisma.mtclientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtclientesPayload>
          }
          deleteMany: {
            args: Prisma.mtclientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mtclientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mtclientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtclientesPayload>
          }
          aggregate: {
            args: Prisma.MtclientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMtclientes>
          }
          groupBy: {
            args: Prisma.mtclientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MtclientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.mtclientesCountArgs<ExtArgs>
            result: $Utils.Optional<MtclientesCountAggregateOutputType> | number
          }
        }
      }
      mtprofitart: {
        payload: Prisma.$mtprofitartPayload<ExtArgs>
        fields: Prisma.mtprofitartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mtprofitartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtprofitartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mtprofitartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtprofitartPayload>
          }
          findFirst: {
            args: Prisma.mtprofitartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtprofitartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mtprofitartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtprofitartPayload>
          }
          findMany: {
            args: Prisma.mtprofitartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtprofitartPayload>[]
          }
          create: {
            args: Prisma.mtprofitartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtprofitartPayload>
          }
          createMany: {
            args: Prisma.mtprofitartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mtprofitartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtprofitartPayload>
          }
          update: {
            args: Prisma.mtprofitartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtprofitartPayload>
          }
          deleteMany: {
            args: Prisma.mtprofitartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mtprofitartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mtprofitartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mtprofitartPayload>
          }
          aggregate: {
            args: Prisma.MtprofitartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMtprofitart>
          }
          groupBy: {
            args: Prisma.mtprofitartGroupByArgs<ExtArgs>
            result: $Utils.Optional<MtprofitartGroupByOutputType>[]
          }
          count: {
            args: Prisma.mtprofitartCountArgs<ExtArgs>
            result: $Utils.Optional<MtprofitartCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cbdevoluciones?: cbdevolucionesOmit
    cbplanpagos?: cbplanpagosOmit
    cbsolicimat?: cbsolicimatOmit
    clbancoprov?: clbancoprovOmit
    clbancoswift?: clbancoswiftOmit
    clcategoria?: clcategoriaOmit
    cltransporte?: cltransporteOmit
    clzonas?: clzonasOmit
    dtdevolucion?: dtdevolucionOmit
    dtdevoluciones?: dtdevolucionesOmit
    hsplanpagos?: hsplanpagosOmit
    metas?: metasOmit
    mtclientes?: mtclientesOmit
    mtprofitart?: mtprofitartOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model cbdevoluciones
   */

  export type AggregateCbdevoluciones = {
    _count: CbdevolucionesCountAggregateOutputType | null
    _avg: CbdevolucionesAvgAggregateOutputType | null
    _sum: CbdevolucionesSumAggregateOutputType | null
    _min: CbdevolucionesMinAggregateOutputType | null
    _max: CbdevolucionesMaxAggregateOutputType | null
  }

  export type CbdevolucionesAvgAggregateOutputType = {
    devonum: number | null
    estatus: number | null
    tipo: number | null
  }

  export type CbdevolucionesSumAggregateOutputType = {
    devonum: number | null
    estatus: number | null
    tipo: number | null
  }

  export type CbdevolucionesMinAggregateOutputType = {
    devonum: number | null
    fecha: Date | null
    estatus: number | null
    codcli: string | null
    motivo: string | null
    tipo: number | null
    chofer: string | null
  }

  export type CbdevolucionesMaxAggregateOutputType = {
    devonum: number | null
    fecha: Date | null
    estatus: number | null
    codcli: string | null
    motivo: string | null
    tipo: number | null
    chofer: string | null
  }

  export type CbdevolucionesCountAggregateOutputType = {
    devonum: number
    fecha: number
    estatus: number
    codcli: number
    motivo: number
    tipo: number
    chofer: number
    _all: number
  }


  export type CbdevolucionesAvgAggregateInputType = {
    devonum?: true
    estatus?: true
    tipo?: true
  }

  export type CbdevolucionesSumAggregateInputType = {
    devonum?: true
    estatus?: true
    tipo?: true
  }

  export type CbdevolucionesMinAggregateInputType = {
    devonum?: true
    fecha?: true
    estatus?: true
    codcli?: true
    motivo?: true
    tipo?: true
    chofer?: true
  }

  export type CbdevolucionesMaxAggregateInputType = {
    devonum?: true
    fecha?: true
    estatus?: true
    codcli?: true
    motivo?: true
    tipo?: true
    chofer?: true
  }

  export type CbdevolucionesCountAggregateInputType = {
    devonum?: true
    fecha?: true
    estatus?: true
    codcli?: true
    motivo?: true
    tipo?: true
    chofer?: true
    _all?: true
  }

  export type CbdevolucionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cbdevoluciones to aggregate.
     */
    where?: cbdevolucionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbdevoluciones to fetch.
     */
    orderBy?: cbdevolucionesOrderByWithRelationInput | cbdevolucionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cbdevolucionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbdevoluciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbdevoluciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cbdevoluciones
    **/
    _count?: true | CbdevolucionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CbdevolucionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CbdevolucionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CbdevolucionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CbdevolucionesMaxAggregateInputType
  }

  export type GetCbdevolucionesAggregateType<T extends CbdevolucionesAggregateArgs> = {
        [P in keyof T & keyof AggregateCbdevoluciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCbdevoluciones[P]>
      : GetScalarType<T[P], AggregateCbdevoluciones[P]>
  }




  export type cbdevolucionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cbdevolucionesWhereInput
    orderBy?: cbdevolucionesOrderByWithAggregationInput | cbdevolucionesOrderByWithAggregationInput[]
    by: CbdevolucionesScalarFieldEnum[] | CbdevolucionesScalarFieldEnum
    having?: cbdevolucionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CbdevolucionesCountAggregateInputType | true
    _avg?: CbdevolucionesAvgAggregateInputType
    _sum?: CbdevolucionesSumAggregateInputType
    _min?: CbdevolucionesMinAggregateInputType
    _max?: CbdevolucionesMaxAggregateInputType
  }

  export type CbdevolucionesGroupByOutputType = {
    devonum: number
    fecha: Date
    estatus: number
    codcli: string
    motivo: string
    tipo: number
    chofer: string
    _count: CbdevolucionesCountAggregateOutputType | null
    _avg: CbdevolucionesAvgAggregateOutputType | null
    _sum: CbdevolucionesSumAggregateOutputType | null
    _min: CbdevolucionesMinAggregateOutputType | null
    _max: CbdevolucionesMaxAggregateOutputType | null
  }

  type GetCbdevolucionesGroupByPayload<T extends cbdevolucionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CbdevolucionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CbdevolucionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CbdevolucionesGroupByOutputType[P]>
            : GetScalarType<T[P], CbdevolucionesGroupByOutputType[P]>
        }
      >
    >


  export type cbdevolucionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    devonum?: boolean
    fecha?: boolean
    estatus?: boolean
    codcli?: boolean
    motivo?: boolean
    tipo?: boolean
    chofer?: boolean
  }, ExtArgs["result"]["cbdevoluciones"]>



  export type cbdevolucionesSelectScalar = {
    devonum?: boolean
    fecha?: boolean
    estatus?: boolean
    codcli?: boolean
    motivo?: boolean
    tipo?: boolean
    chofer?: boolean
  }

  export type cbdevolucionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"devonum" | "fecha" | "estatus" | "codcli" | "motivo" | "tipo" | "chofer", ExtArgs["result"]["cbdevoluciones"]>

  export type $cbdevolucionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cbdevoluciones"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      devonum: number
      fecha: Date
      estatus: number
      codcli: string
      motivo: string
      tipo: number
      chofer: string
    }, ExtArgs["result"]["cbdevoluciones"]>
    composites: {}
  }

  type cbdevolucionesGetPayload<S extends boolean | null | undefined | cbdevolucionesDefaultArgs> = $Result.GetResult<Prisma.$cbdevolucionesPayload, S>

  type cbdevolucionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cbdevolucionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CbdevolucionesCountAggregateInputType | true
    }

  export interface cbdevolucionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cbdevoluciones'], meta: { name: 'cbdevoluciones' } }
    /**
     * Find zero or one Cbdevoluciones that matches the filter.
     * @param {cbdevolucionesFindUniqueArgs} args - Arguments to find a Cbdevoluciones
     * @example
     * // Get one Cbdevoluciones
     * const cbdevoluciones = await prisma.cbdevoluciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cbdevolucionesFindUniqueArgs>(args: SelectSubset<T, cbdevolucionesFindUniqueArgs<ExtArgs>>): Prisma__cbdevolucionesClient<$Result.GetResult<Prisma.$cbdevolucionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cbdevoluciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cbdevolucionesFindUniqueOrThrowArgs} args - Arguments to find a Cbdevoluciones
     * @example
     * // Get one Cbdevoluciones
     * const cbdevoluciones = await prisma.cbdevoluciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cbdevolucionesFindUniqueOrThrowArgs>(args: SelectSubset<T, cbdevolucionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cbdevolucionesClient<$Result.GetResult<Prisma.$cbdevolucionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cbdevoluciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbdevolucionesFindFirstArgs} args - Arguments to find a Cbdevoluciones
     * @example
     * // Get one Cbdevoluciones
     * const cbdevoluciones = await prisma.cbdevoluciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cbdevolucionesFindFirstArgs>(args?: SelectSubset<T, cbdevolucionesFindFirstArgs<ExtArgs>>): Prisma__cbdevolucionesClient<$Result.GetResult<Prisma.$cbdevolucionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cbdevoluciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbdevolucionesFindFirstOrThrowArgs} args - Arguments to find a Cbdevoluciones
     * @example
     * // Get one Cbdevoluciones
     * const cbdevoluciones = await prisma.cbdevoluciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cbdevolucionesFindFirstOrThrowArgs>(args?: SelectSubset<T, cbdevolucionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__cbdevolucionesClient<$Result.GetResult<Prisma.$cbdevolucionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cbdevoluciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbdevolucionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cbdevoluciones
     * const cbdevoluciones = await prisma.cbdevoluciones.findMany()
     * 
     * // Get first 10 Cbdevoluciones
     * const cbdevoluciones = await prisma.cbdevoluciones.findMany({ take: 10 })
     * 
     * // Only select the `devonum`
     * const cbdevolucionesWithDevonumOnly = await prisma.cbdevoluciones.findMany({ select: { devonum: true } })
     * 
     */
    findMany<T extends cbdevolucionesFindManyArgs>(args?: SelectSubset<T, cbdevolucionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cbdevolucionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cbdevoluciones.
     * @param {cbdevolucionesCreateArgs} args - Arguments to create a Cbdevoluciones.
     * @example
     * // Create one Cbdevoluciones
     * const Cbdevoluciones = await prisma.cbdevoluciones.create({
     *   data: {
     *     // ... data to create a Cbdevoluciones
     *   }
     * })
     * 
     */
    create<T extends cbdevolucionesCreateArgs>(args: SelectSubset<T, cbdevolucionesCreateArgs<ExtArgs>>): Prisma__cbdevolucionesClient<$Result.GetResult<Prisma.$cbdevolucionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cbdevoluciones.
     * @param {cbdevolucionesCreateManyArgs} args - Arguments to create many Cbdevoluciones.
     * @example
     * // Create many Cbdevoluciones
     * const cbdevoluciones = await prisma.cbdevoluciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cbdevolucionesCreateManyArgs>(args?: SelectSubset<T, cbdevolucionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cbdevoluciones.
     * @param {cbdevolucionesDeleteArgs} args - Arguments to delete one Cbdevoluciones.
     * @example
     * // Delete one Cbdevoluciones
     * const Cbdevoluciones = await prisma.cbdevoluciones.delete({
     *   where: {
     *     // ... filter to delete one Cbdevoluciones
     *   }
     * })
     * 
     */
    delete<T extends cbdevolucionesDeleteArgs>(args: SelectSubset<T, cbdevolucionesDeleteArgs<ExtArgs>>): Prisma__cbdevolucionesClient<$Result.GetResult<Prisma.$cbdevolucionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cbdevoluciones.
     * @param {cbdevolucionesUpdateArgs} args - Arguments to update one Cbdevoluciones.
     * @example
     * // Update one Cbdevoluciones
     * const cbdevoluciones = await prisma.cbdevoluciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cbdevolucionesUpdateArgs>(args: SelectSubset<T, cbdevolucionesUpdateArgs<ExtArgs>>): Prisma__cbdevolucionesClient<$Result.GetResult<Prisma.$cbdevolucionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cbdevoluciones.
     * @param {cbdevolucionesDeleteManyArgs} args - Arguments to filter Cbdevoluciones to delete.
     * @example
     * // Delete a few Cbdevoluciones
     * const { count } = await prisma.cbdevoluciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cbdevolucionesDeleteManyArgs>(args?: SelectSubset<T, cbdevolucionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cbdevoluciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbdevolucionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cbdevoluciones
     * const cbdevoluciones = await prisma.cbdevoluciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cbdevolucionesUpdateManyArgs>(args: SelectSubset<T, cbdevolucionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cbdevoluciones.
     * @param {cbdevolucionesUpsertArgs} args - Arguments to update or create a Cbdevoluciones.
     * @example
     * // Update or create a Cbdevoluciones
     * const cbdevoluciones = await prisma.cbdevoluciones.upsert({
     *   create: {
     *     // ... data to create a Cbdevoluciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cbdevoluciones we want to update
     *   }
     * })
     */
    upsert<T extends cbdevolucionesUpsertArgs>(args: SelectSubset<T, cbdevolucionesUpsertArgs<ExtArgs>>): Prisma__cbdevolucionesClient<$Result.GetResult<Prisma.$cbdevolucionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cbdevoluciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbdevolucionesCountArgs} args - Arguments to filter Cbdevoluciones to count.
     * @example
     * // Count the number of Cbdevoluciones
     * const count = await prisma.cbdevoluciones.count({
     *   where: {
     *     // ... the filter for the Cbdevoluciones we want to count
     *   }
     * })
    **/
    count<T extends cbdevolucionesCountArgs>(
      args?: Subset<T, cbdevolucionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CbdevolucionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cbdevoluciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CbdevolucionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CbdevolucionesAggregateArgs>(args: Subset<T, CbdevolucionesAggregateArgs>): Prisma.PrismaPromise<GetCbdevolucionesAggregateType<T>>

    /**
     * Group by Cbdevoluciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbdevolucionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cbdevolucionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cbdevolucionesGroupByArgs['orderBy'] }
        : { orderBy?: cbdevolucionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cbdevolucionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCbdevolucionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cbdevoluciones model
   */
  readonly fields: cbdevolucionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cbdevoluciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cbdevolucionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cbdevoluciones model
   */
  interface cbdevolucionesFieldRefs {
    readonly devonum: FieldRef<"cbdevoluciones", 'Int'>
    readonly fecha: FieldRef<"cbdevoluciones", 'DateTime'>
    readonly estatus: FieldRef<"cbdevoluciones", 'Int'>
    readonly codcli: FieldRef<"cbdevoluciones", 'String'>
    readonly motivo: FieldRef<"cbdevoluciones", 'String'>
    readonly tipo: FieldRef<"cbdevoluciones", 'Int'>
    readonly chofer: FieldRef<"cbdevoluciones", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cbdevoluciones findUnique
   */
  export type cbdevolucionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbdevoluciones
     */
    select?: cbdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbdevoluciones
     */
    omit?: cbdevolucionesOmit<ExtArgs> | null
    /**
     * Filter, which cbdevoluciones to fetch.
     */
    where: cbdevolucionesWhereUniqueInput
  }

  /**
   * cbdevoluciones findUniqueOrThrow
   */
  export type cbdevolucionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbdevoluciones
     */
    select?: cbdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbdevoluciones
     */
    omit?: cbdevolucionesOmit<ExtArgs> | null
    /**
     * Filter, which cbdevoluciones to fetch.
     */
    where: cbdevolucionesWhereUniqueInput
  }

  /**
   * cbdevoluciones findFirst
   */
  export type cbdevolucionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbdevoluciones
     */
    select?: cbdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbdevoluciones
     */
    omit?: cbdevolucionesOmit<ExtArgs> | null
    /**
     * Filter, which cbdevoluciones to fetch.
     */
    where?: cbdevolucionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbdevoluciones to fetch.
     */
    orderBy?: cbdevolucionesOrderByWithRelationInput | cbdevolucionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cbdevoluciones.
     */
    cursor?: cbdevolucionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbdevoluciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbdevoluciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cbdevoluciones.
     */
    distinct?: CbdevolucionesScalarFieldEnum | CbdevolucionesScalarFieldEnum[]
  }

  /**
   * cbdevoluciones findFirstOrThrow
   */
  export type cbdevolucionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbdevoluciones
     */
    select?: cbdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbdevoluciones
     */
    omit?: cbdevolucionesOmit<ExtArgs> | null
    /**
     * Filter, which cbdevoluciones to fetch.
     */
    where?: cbdevolucionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbdevoluciones to fetch.
     */
    orderBy?: cbdevolucionesOrderByWithRelationInput | cbdevolucionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cbdevoluciones.
     */
    cursor?: cbdevolucionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbdevoluciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbdevoluciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cbdevoluciones.
     */
    distinct?: CbdevolucionesScalarFieldEnum | CbdevolucionesScalarFieldEnum[]
  }

  /**
   * cbdevoluciones findMany
   */
  export type cbdevolucionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbdevoluciones
     */
    select?: cbdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbdevoluciones
     */
    omit?: cbdevolucionesOmit<ExtArgs> | null
    /**
     * Filter, which cbdevoluciones to fetch.
     */
    where?: cbdevolucionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbdevoluciones to fetch.
     */
    orderBy?: cbdevolucionesOrderByWithRelationInput | cbdevolucionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cbdevoluciones.
     */
    cursor?: cbdevolucionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbdevoluciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbdevoluciones.
     */
    skip?: number
    distinct?: CbdevolucionesScalarFieldEnum | CbdevolucionesScalarFieldEnum[]
  }

  /**
   * cbdevoluciones create
   */
  export type cbdevolucionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbdevoluciones
     */
    select?: cbdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbdevoluciones
     */
    omit?: cbdevolucionesOmit<ExtArgs> | null
    /**
     * The data needed to create a cbdevoluciones.
     */
    data: XOR<cbdevolucionesCreateInput, cbdevolucionesUncheckedCreateInput>
  }

  /**
   * cbdevoluciones createMany
   */
  export type cbdevolucionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cbdevoluciones.
     */
    data: cbdevolucionesCreateManyInput | cbdevolucionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cbdevoluciones update
   */
  export type cbdevolucionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbdevoluciones
     */
    select?: cbdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbdevoluciones
     */
    omit?: cbdevolucionesOmit<ExtArgs> | null
    /**
     * The data needed to update a cbdevoluciones.
     */
    data: XOR<cbdevolucionesUpdateInput, cbdevolucionesUncheckedUpdateInput>
    /**
     * Choose, which cbdevoluciones to update.
     */
    where: cbdevolucionesWhereUniqueInput
  }

  /**
   * cbdevoluciones updateMany
   */
  export type cbdevolucionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cbdevoluciones.
     */
    data: XOR<cbdevolucionesUpdateManyMutationInput, cbdevolucionesUncheckedUpdateManyInput>
    /**
     * Filter which cbdevoluciones to update
     */
    where?: cbdevolucionesWhereInput
    /**
     * Limit how many cbdevoluciones to update.
     */
    limit?: number
  }

  /**
   * cbdevoluciones upsert
   */
  export type cbdevolucionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbdevoluciones
     */
    select?: cbdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbdevoluciones
     */
    omit?: cbdevolucionesOmit<ExtArgs> | null
    /**
     * The filter to search for the cbdevoluciones to update in case it exists.
     */
    where: cbdevolucionesWhereUniqueInput
    /**
     * In case the cbdevoluciones found by the `where` argument doesn't exist, create a new cbdevoluciones with this data.
     */
    create: XOR<cbdevolucionesCreateInput, cbdevolucionesUncheckedCreateInput>
    /**
     * In case the cbdevoluciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cbdevolucionesUpdateInput, cbdevolucionesUncheckedUpdateInput>
  }

  /**
   * cbdevoluciones delete
   */
  export type cbdevolucionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbdevoluciones
     */
    select?: cbdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbdevoluciones
     */
    omit?: cbdevolucionesOmit<ExtArgs> | null
    /**
     * Filter which cbdevoluciones to delete.
     */
    where: cbdevolucionesWhereUniqueInput
  }

  /**
   * cbdevoluciones deleteMany
   */
  export type cbdevolucionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cbdevoluciones to delete
     */
    where?: cbdevolucionesWhereInput
    /**
     * Limit how many cbdevoluciones to delete.
     */
    limit?: number
  }

  /**
   * cbdevoluciones without action
   */
  export type cbdevolucionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbdevoluciones
     */
    select?: cbdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbdevoluciones
     */
    omit?: cbdevolucionesOmit<ExtArgs> | null
  }


  /**
   * Model cbplanpagos
   */

  export type AggregateCbplanpagos = {
    _count: CbplanpagosCountAggregateOutputType | null
    _avg: CbplanpagosAvgAggregateOutputType | null
    _sum: CbplanpagosSumAggregateOutputType | null
    _min: CbplanpagosMinAggregateOutputType | null
    _max: CbplanpagosMaxAggregateOutputType | null
  }

  export type CbplanpagosAvgAggregateOutputType = {
    planpagonumero: number | null
    totalnetobsd: Decimal | null
    totalnetousd: Decimal | null
    totalsaldobsd: Decimal | null
    totalsaldousd: Decimal | null
    totalautorizadobsd: Decimal | null
    totalautorizadousd: Decimal | null
    totalpagadobsd: Decimal | null
    totalpagadousd: Decimal | null
    totalxpagarbsd: Decimal | null
    totalxpagarusd: Decimal | null
    owneruser: number | null
  }

  export type CbplanpagosSumAggregateOutputType = {
    planpagonumero: number | null
    totalnetobsd: Decimal | null
    totalnetousd: Decimal | null
    totalsaldobsd: Decimal | null
    totalsaldousd: Decimal | null
    totalautorizadobsd: Decimal | null
    totalautorizadousd: Decimal | null
    totalpagadobsd: Decimal | null
    totalpagadousd: Decimal | null
    totalxpagarbsd: Decimal | null
    totalxpagarusd: Decimal | null
    owneruser: number | null
  }

  export type CbplanpagosMinAggregateOutputType = {
    planpagonumero: number | null
    unidad: string | null
    empresa: string | null
    fechapagoautorizada: Date | null
    descripcionplan: string | null
    fechaautorizadopor: Date | null
    autorizadopor: string | null
    totalnetobsd: Decimal | null
    totalnetousd: Decimal | null
    totalsaldobsd: Decimal | null
    totalsaldousd: Decimal | null
    totalautorizadobsd: Decimal | null
    totalautorizadousd: Decimal | null
    totalpagadobsd: Decimal | null
    totalpagadousd: Decimal | null
    totalxpagarbsd: Decimal | null
    totalxpagarusd: Decimal | null
    generadotxt: boolean | null
    conciliadopago: boolean | null
    owneruser: number | null
  }

  export type CbplanpagosMaxAggregateOutputType = {
    planpagonumero: number | null
    unidad: string | null
    empresa: string | null
    fechapagoautorizada: Date | null
    descripcionplan: string | null
    fechaautorizadopor: Date | null
    autorizadopor: string | null
    totalnetobsd: Decimal | null
    totalnetousd: Decimal | null
    totalsaldobsd: Decimal | null
    totalsaldousd: Decimal | null
    totalautorizadobsd: Decimal | null
    totalautorizadousd: Decimal | null
    totalpagadobsd: Decimal | null
    totalpagadousd: Decimal | null
    totalxpagarbsd: Decimal | null
    totalxpagarusd: Decimal | null
    generadotxt: boolean | null
    conciliadopago: boolean | null
    owneruser: number | null
  }

  export type CbplanpagosCountAggregateOutputType = {
    planpagonumero: number
    unidad: number
    empresa: number
    fechapagoautorizada: number
    descripcionplan: number
    fechaautorizadopor: number
    autorizadopor: number
    totalnetobsd: number
    totalnetousd: number
    totalsaldobsd: number
    totalsaldousd: number
    totalautorizadobsd: number
    totalautorizadousd: number
    totalpagadobsd: number
    totalpagadousd: number
    totalxpagarbsd: number
    totalxpagarusd: number
    generadotxt: number
    conciliadopago: number
    owneruser: number
    _all: number
  }


  export type CbplanpagosAvgAggregateInputType = {
    planpagonumero?: true
    totalnetobsd?: true
    totalnetousd?: true
    totalsaldobsd?: true
    totalsaldousd?: true
    totalautorizadobsd?: true
    totalautorizadousd?: true
    totalpagadobsd?: true
    totalpagadousd?: true
    totalxpagarbsd?: true
    totalxpagarusd?: true
    owneruser?: true
  }

  export type CbplanpagosSumAggregateInputType = {
    planpagonumero?: true
    totalnetobsd?: true
    totalnetousd?: true
    totalsaldobsd?: true
    totalsaldousd?: true
    totalautorizadobsd?: true
    totalautorizadousd?: true
    totalpagadobsd?: true
    totalpagadousd?: true
    totalxpagarbsd?: true
    totalxpagarusd?: true
    owneruser?: true
  }

  export type CbplanpagosMinAggregateInputType = {
    planpagonumero?: true
    unidad?: true
    empresa?: true
    fechapagoautorizada?: true
    descripcionplan?: true
    fechaautorizadopor?: true
    autorizadopor?: true
    totalnetobsd?: true
    totalnetousd?: true
    totalsaldobsd?: true
    totalsaldousd?: true
    totalautorizadobsd?: true
    totalautorizadousd?: true
    totalpagadobsd?: true
    totalpagadousd?: true
    totalxpagarbsd?: true
    totalxpagarusd?: true
    generadotxt?: true
    conciliadopago?: true
    owneruser?: true
  }

  export type CbplanpagosMaxAggregateInputType = {
    planpagonumero?: true
    unidad?: true
    empresa?: true
    fechapagoautorizada?: true
    descripcionplan?: true
    fechaautorizadopor?: true
    autorizadopor?: true
    totalnetobsd?: true
    totalnetousd?: true
    totalsaldobsd?: true
    totalsaldousd?: true
    totalautorizadobsd?: true
    totalautorizadousd?: true
    totalpagadobsd?: true
    totalpagadousd?: true
    totalxpagarbsd?: true
    totalxpagarusd?: true
    generadotxt?: true
    conciliadopago?: true
    owneruser?: true
  }

  export type CbplanpagosCountAggregateInputType = {
    planpagonumero?: true
    unidad?: true
    empresa?: true
    fechapagoautorizada?: true
    descripcionplan?: true
    fechaautorizadopor?: true
    autorizadopor?: true
    totalnetobsd?: true
    totalnetousd?: true
    totalsaldobsd?: true
    totalsaldousd?: true
    totalautorizadobsd?: true
    totalautorizadousd?: true
    totalpagadobsd?: true
    totalpagadousd?: true
    totalxpagarbsd?: true
    totalxpagarusd?: true
    generadotxt?: true
    conciliadopago?: true
    owneruser?: true
    _all?: true
  }

  export type CbplanpagosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cbplanpagos to aggregate.
     */
    where?: cbplanpagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbplanpagos to fetch.
     */
    orderBy?: cbplanpagosOrderByWithRelationInput | cbplanpagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cbplanpagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbplanpagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbplanpagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cbplanpagos
    **/
    _count?: true | CbplanpagosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CbplanpagosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CbplanpagosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CbplanpagosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CbplanpagosMaxAggregateInputType
  }

  export type GetCbplanpagosAggregateType<T extends CbplanpagosAggregateArgs> = {
        [P in keyof T & keyof AggregateCbplanpagos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCbplanpagos[P]>
      : GetScalarType<T[P], AggregateCbplanpagos[P]>
  }




  export type cbplanpagosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cbplanpagosWhereInput
    orderBy?: cbplanpagosOrderByWithAggregationInput | cbplanpagosOrderByWithAggregationInput[]
    by: CbplanpagosScalarFieldEnum[] | CbplanpagosScalarFieldEnum
    having?: cbplanpagosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CbplanpagosCountAggregateInputType | true
    _avg?: CbplanpagosAvgAggregateInputType
    _sum?: CbplanpagosSumAggregateInputType
    _min?: CbplanpagosMinAggregateInputType
    _max?: CbplanpagosMaxAggregateInputType
  }

  export type CbplanpagosGroupByOutputType = {
    planpagonumero: number
    unidad: string
    empresa: string
    fechapagoautorizada: Date
    descripcionplan: string
    fechaautorizadopor: Date | null
    autorizadopor: string | null
    totalnetobsd: Decimal
    totalnetousd: Decimal
    totalsaldobsd: Decimal
    totalsaldousd: Decimal
    totalautorizadobsd: Decimal
    totalautorizadousd: Decimal
    totalpagadobsd: Decimal
    totalpagadousd: Decimal
    totalxpagarbsd: Decimal
    totalxpagarusd: Decimal
    generadotxt: boolean
    conciliadopago: boolean
    owneruser: number
    _count: CbplanpagosCountAggregateOutputType | null
    _avg: CbplanpagosAvgAggregateOutputType | null
    _sum: CbplanpagosSumAggregateOutputType | null
    _min: CbplanpagosMinAggregateOutputType | null
    _max: CbplanpagosMaxAggregateOutputType | null
  }

  type GetCbplanpagosGroupByPayload<T extends cbplanpagosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CbplanpagosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CbplanpagosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CbplanpagosGroupByOutputType[P]>
            : GetScalarType<T[P], CbplanpagosGroupByOutputType[P]>
        }
      >
    >


  export type cbplanpagosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    planpagonumero?: boolean
    unidad?: boolean
    empresa?: boolean
    fechapagoautorizada?: boolean
    descripcionplan?: boolean
    fechaautorizadopor?: boolean
    autorizadopor?: boolean
    totalnetobsd?: boolean
    totalnetousd?: boolean
    totalsaldobsd?: boolean
    totalsaldousd?: boolean
    totalautorizadobsd?: boolean
    totalautorizadousd?: boolean
    totalpagadobsd?: boolean
    totalpagadousd?: boolean
    totalxpagarbsd?: boolean
    totalxpagarusd?: boolean
    generadotxt?: boolean
    conciliadopago?: boolean
    owneruser?: boolean
  }, ExtArgs["result"]["cbplanpagos"]>



  export type cbplanpagosSelectScalar = {
    planpagonumero?: boolean
    unidad?: boolean
    empresa?: boolean
    fechapagoautorizada?: boolean
    descripcionplan?: boolean
    fechaautorizadopor?: boolean
    autorizadopor?: boolean
    totalnetobsd?: boolean
    totalnetousd?: boolean
    totalsaldobsd?: boolean
    totalsaldousd?: boolean
    totalautorizadobsd?: boolean
    totalautorizadousd?: boolean
    totalpagadobsd?: boolean
    totalpagadousd?: boolean
    totalxpagarbsd?: boolean
    totalxpagarusd?: boolean
    generadotxt?: boolean
    conciliadopago?: boolean
    owneruser?: boolean
  }

  export type cbplanpagosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"planpagonumero" | "unidad" | "empresa" | "fechapagoautorizada" | "descripcionplan" | "fechaautorizadopor" | "autorizadopor" | "totalnetobsd" | "totalnetousd" | "totalsaldobsd" | "totalsaldousd" | "totalautorizadobsd" | "totalautorizadousd" | "totalpagadobsd" | "totalpagadousd" | "totalxpagarbsd" | "totalxpagarusd" | "generadotxt" | "conciliadopago" | "owneruser", ExtArgs["result"]["cbplanpagos"]>

  export type $cbplanpagosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cbplanpagos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      planpagonumero: number
      unidad: string
      empresa: string
      fechapagoautorizada: Date
      descripcionplan: string
      fechaautorizadopor: Date | null
      autorizadopor: string | null
      totalnetobsd: Prisma.Decimal
      totalnetousd: Prisma.Decimal
      totalsaldobsd: Prisma.Decimal
      totalsaldousd: Prisma.Decimal
      totalautorizadobsd: Prisma.Decimal
      totalautorizadousd: Prisma.Decimal
      totalpagadobsd: Prisma.Decimal
      totalpagadousd: Prisma.Decimal
      totalxpagarbsd: Prisma.Decimal
      totalxpagarusd: Prisma.Decimal
      generadotxt: boolean
      conciliadopago: boolean
      owneruser: number
    }, ExtArgs["result"]["cbplanpagos"]>
    composites: {}
  }

  type cbplanpagosGetPayload<S extends boolean | null | undefined | cbplanpagosDefaultArgs> = $Result.GetResult<Prisma.$cbplanpagosPayload, S>

  type cbplanpagosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cbplanpagosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CbplanpagosCountAggregateInputType | true
    }

  export interface cbplanpagosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cbplanpagos'], meta: { name: 'cbplanpagos' } }
    /**
     * Find zero or one Cbplanpagos that matches the filter.
     * @param {cbplanpagosFindUniqueArgs} args - Arguments to find a Cbplanpagos
     * @example
     * // Get one Cbplanpagos
     * const cbplanpagos = await prisma.cbplanpagos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cbplanpagosFindUniqueArgs>(args: SelectSubset<T, cbplanpagosFindUniqueArgs<ExtArgs>>): Prisma__cbplanpagosClient<$Result.GetResult<Prisma.$cbplanpagosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cbplanpagos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cbplanpagosFindUniqueOrThrowArgs} args - Arguments to find a Cbplanpagos
     * @example
     * // Get one Cbplanpagos
     * const cbplanpagos = await prisma.cbplanpagos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cbplanpagosFindUniqueOrThrowArgs>(args: SelectSubset<T, cbplanpagosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cbplanpagosClient<$Result.GetResult<Prisma.$cbplanpagosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cbplanpagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbplanpagosFindFirstArgs} args - Arguments to find a Cbplanpagos
     * @example
     * // Get one Cbplanpagos
     * const cbplanpagos = await prisma.cbplanpagos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cbplanpagosFindFirstArgs>(args?: SelectSubset<T, cbplanpagosFindFirstArgs<ExtArgs>>): Prisma__cbplanpagosClient<$Result.GetResult<Prisma.$cbplanpagosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cbplanpagos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbplanpagosFindFirstOrThrowArgs} args - Arguments to find a Cbplanpagos
     * @example
     * // Get one Cbplanpagos
     * const cbplanpagos = await prisma.cbplanpagos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cbplanpagosFindFirstOrThrowArgs>(args?: SelectSubset<T, cbplanpagosFindFirstOrThrowArgs<ExtArgs>>): Prisma__cbplanpagosClient<$Result.GetResult<Prisma.$cbplanpagosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cbplanpagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbplanpagosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cbplanpagos
     * const cbplanpagos = await prisma.cbplanpagos.findMany()
     * 
     * // Get first 10 Cbplanpagos
     * const cbplanpagos = await prisma.cbplanpagos.findMany({ take: 10 })
     * 
     * // Only select the `planpagonumero`
     * const cbplanpagosWithPlanpagonumeroOnly = await prisma.cbplanpagos.findMany({ select: { planpagonumero: true } })
     * 
     */
    findMany<T extends cbplanpagosFindManyArgs>(args?: SelectSubset<T, cbplanpagosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cbplanpagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cbplanpagos.
     * @param {cbplanpagosCreateArgs} args - Arguments to create a Cbplanpagos.
     * @example
     * // Create one Cbplanpagos
     * const Cbplanpagos = await prisma.cbplanpagos.create({
     *   data: {
     *     // ... data to create a Cbplanpagos
     *   }
     * })
     * 
     */
    create<T extends cbplanpagosCreateArgs>(args: SelectSubset<T, cbplanpagosCreateArgs<ExtArgs>>): Prisma__cbplanpagosClient<$Result.GetResult<Prisma.$cbplanpagosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cbplanpagos.
     * @param {cbplanpagosCreateManyArgs} args - Arguments to create many Cbplanpagos.
     * @example
     * // Create many Cbplanpagos
     * const cbplanpagos = await prisma.cbplanpagos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cbplanpagosCreateManyArgs>(args?: SelectSubset<T, cbplanpagosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cbplanpagos.
     * @param {cbplanpagosDeleteArgs} args - Arguments to delete one Cbplanpagos.
     * @example
     * // Delete one Cbplanpagos
     * const Cbplanpagos = await prisma.cbplanpagos.delete({
     *   where: {
     *     // ... filter to delete one Cbplanpagos
     *   }
     * })
     * 
     */
    delete<T extends cbplanpagosDeleteArgs>(args: SelectSubset<T, cbplanpagosDeleteArgs<ExtArgs>>): Prisma__cbplanpagosClient<$Result.GetResult<Prisma.$cbplanpagosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cbplanpagos.
     * @param {cbplanpagosUpdateArgs} args - Arguments to update one Cbplanpagos.
     * @example
     * // Update one Cbplanpagos
     * const cbplanpagos = await prisma.cbplanpagos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cbplanpagosUpdateArgs>(args: SelectSubset<T, cbplanpagosUpdateArgs<ExtArgs>>): Prisma__cbplanpagosClient<$Result.GetResult<Prisma.$cbplanpagosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cbplanpagos.
     * @param {cbplanpagosDeleteManyArgs} args - Arguments to filter Cbplanpagos to delete.
     * @example
     * // Delete a few Cbplanpagos
     * const { count } = await prisma.cbplanpagos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cbplanpagosDeleteManyArgs>(args?: SelectSubset<T, cbplanpagosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cbplanpagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbplanpagosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cbplanpagos
     * const cbplanpagos = await prisma.cbplanpagos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cbplanpagosUpdateManyArgs>(args: SelectSubset<T, cbplanpagosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cbplanpagos.
     * @param {cbplanpagosUpsertArgs} args - Arguments to update or create a Cbplanpagos.
     * @example
     * // Update or create a Cbplanpagos
     * const cbplanpagos = await prisma.cbplanpagos.upsert({
     *   create: {
     *     // ... data to create a Cbplanpagos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cbplanpagos we want to update
     *   }
     * })
     */
    upsert<T extends cbplanpagosUpsertArgs>(args: SelectSubset<T, cbplanpagosUpsertArgs<ExtArgs>>): Prisma__cbplanpagosClient<$Result.GetResult<Prisma.$cbplanpagosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cbplanpagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbplanpagosCountArgs} args - Arguments to filter Cbplanpagos to count.
     * @example
     * // Count the number of Cbplanpagos
     * const count = await prisma.cbplanpagos.count({
     *   where: {
     *     // ... the filter for the Cbplanpagos we want to count
     *   }
     * })
    **/
    count<T extends cbplanpagosCountArgs>(
      args?: Subset<T, cbplanpagosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CbplanpagosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cbplanpagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CbplanpagosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CbplanpagosAggregateArgs>(args: Subset<T, CbplanpagosAggregateArgs>): Prisma.PrismaPromise<GetCbplanpagosAggregateType<T>>

    /**
     * Group by Cbplanpagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbplanpagosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cbplanpagosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cbplanpagosGroupByArgs['orderBy'] }
        : { orderBy?: cbplanpagosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cbplanpagosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCbplanpagosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cbplanpagos model
   */
  readonly fields: cbplanpagosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cbplanpagos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cbplanpagosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cbplanpagos model
   */
  interface cbplanpagosFieldRefs {
    readonly planpagonumero: FieldRef<"cbplanpagos", 'Int'>
    readonly unidad: FieldRef<"cbplanpagos", 'String'>
    readonly empresa: FieldRef<"cbplanpagos", 'String'>
    readonly fechapagoautorizada: FieldRef<"cbplanpagos", 'DateTime'>
    readonly descripcionplan: FieldRef<"cbplanpagos", 'String'>
    readonly fechaautorizadopor: FieldRef<"cbplanpagos", 'DateTime'>
    readonly autorizadopor: FieldRef<"cbplanpagos", 'String'>
    readonly totalnetobsd: FieldRef<"cbplanpagos", 'Decimal'>
    readonly totalnetousd: FieldRef<"cbplanpagos", 'Decimal'>
    readonly totalsaldobsd: FieldRef<"cbplanpagos", 'Decimal'>
    readonly totalsaldousd: FieldRef<"cbplanpagos", 'Decimal'>
    readonly totalautorizadobsd: FieldRef<"cbplanpagos", 'Decimal'>
    readonly totalautorizadousd: FieldRef<"cbplanpagos", 'Decimal'>
    readonly totalpagadobsd: FieldRef<"cbplanpagos", 'Decimal'>
    readonly totalpagadousd: FieldRef<"cbplanpagos", 'Decimal'>
    readonly totalxpagarbsd: FieldRef<"cbplanpagos", 'Decimal'>
    readonly totalxpagarusd: FieldRef<"cbplanpagos", 'Decimal'>
    readonly generadotxt: FieldRef<"cbplanpagos", 'Boolean'>
    readonly conciliadopago: FieldRef<"cbplanpagos", 'Boolean'>
    readonly owneruser: FieldRef<"cbplanpagos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cbplanpagos findUnique
   */
  export type cbplanpagosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbplanpagos
     */
    select?: cbplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbplanpagos
     */
    omit?: cbplanpagosOmit<ExtArgs> | null
    /**
     * Filter, which cbplanpagos to fetch.
     */
    where: cbplanpagosWhereUniqueInput
  }

  /**
   * cbplanpagos findUniqueOrThrow
   */
  export type cbplanpagosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbplanpagos
     */
    select?: cbplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbplanpagos
     */
    omit?: cbplanpagosOmit<ExtArgs> | null
    /**
     * Filter, which cbplanpagos to fetch.
     */
    where: cbplanpagosWhereUniqueInput
  }

  /**
   * cbplanpagos findFirst
   */
  export type cbplanpagosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbplanpagos
     */
    select?: cbplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbplanpagos
     */
    omit?: cbplanpagosOmit<ExtArgs> | null
    /**
     * Filter, which cbplanpagos to fetch.
     */
    where?: cbplanpagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbplanpagos to fetch.
     */
    orderBy?: cbplanpagosOrderByWithRelationInput | cbplanpagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cbplanpagos.
     */
    cursor?: cbplanpagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbplanpagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbplanpagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cbplanpagos.
     */
    distinct?: CbplanpagosScalarFieldEnum | CbplanpagosScalarFieldEnum[]
  }

  /**
   * cbplanpagos findFirstOrThrow
   */
  export type cbplanpagosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbplanpagos
     */
    select?: cbplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbplanpagos
     */
    omit?: cbplanpagosOmit<ExtArgs> | null
    /**
     * Filter, which cbplanpagos to fetch.
     */
    where?: cbplanpagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbplanpagos to fetch.
     */
    orderBy?: cbplanpagosOrderByWithRelationInput | cbplanpagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cbplanpagos.
     */
    cursor?: cbplanpagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbplanpagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbplanpagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cbplanpagos.
     */
    distinct?: CbplanpagosScalarFieldEnum | CbplanpagosScalarFieldEnum[]
  }

  /**
   * cbplanpagos findMany
   */
  export type cbplanpagosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbplanpagos
     */
    select?: cbplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbplanpagos
     */
    omit?: cbplanpagosOmit<ExtArgs> | null
    /**
     * Filter, which cbplanpagos to fetch.
     */
    where?: cbplanpagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbplanpagos to fetch.
     */
    orderBy?: cbplanpagosOrderByWithRelationInput | cbplanpagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cbplanpagos.
     */
    cursor?: cbplanpagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbplanpagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbplanpagos.
     */
    skip?: number
    distinct?: CbplanpagosScalarFieldEnum | CbplanpagosScalarFieldEnum[]
  }

  /**
   * cbplanpagos create
   */
  export type cbplanpagosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbplanpagos
     */
    select?: cbplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbplanpagos
     */
    omit?: cbplanpagosOmit<ExtArgs> | null
    /**
     * The data needed to create a cbplanpagos.
     */
    data: XOR<cbplanpagosCreateInput, cbplanpagosUncheckedCreateInput>
  }

  /**
   * cbplanpagos createMany
   */
  export type cbplanpagosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cbplanpagos.
     */
    data: cbplanpagosCreateManyInput | cbplanpagosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cbplanpagos update
   */
  export type cbplanpagosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbplanpagos
     */
    select?: cbplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbplanpagos
     */
    omit?: cbplanpagosOmit<ExtArgs> | null
    /**
     * The data needed to update a cbplanpagos.
     */
    data: XOR<cbplanpagosUpdateInput, cbplanpagosUncheckedUpdateInput>
    /**
     * Choose, which cbplanpagos to update.
     */
    where: cbplanpagosWhereUniqueInput
  }

  /**
   * cbplanpagos updateMany
   */
  export type cbplanpagosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cbplanpagos.
     */
    data: XOR<cbplanpagosUpdateManyMutationInput, cbplanpagosUncheckedUpdateManyInput>
    /**
     * Filter which cbplanpagos to update
     */
    where?: cbplanpagosWhereInput
    /**
     * Limit how many cbplanpagos to update.
     */
    limit?: number
  }

  /**
   * cbplanpagos upsert
   */
  export type cbplanpagosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbplanpagos
     */
    select?: cbplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbplanpagos
     */
    omit?: cbplanpagosOmit<ExtArgs> | null
    /**
     * The filter to search for the cbplanpagos to update in case it exists.
     */
    where: cbplanpagosWhereUniqueInput
    /**
     * In case the cbplanpagos found by the `where` argument doesn't exist, create a new cbplanpagos with this data.
     */
    create: XOR<cbplanpagosCreateInput, cbplanpagosUncheckedCreateInput>
    /**
     * In case the cbplanpagos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cbplanpagosUpdateInput, cbplanpagosUncheckedUpdateInput>
  }

  /**
   * cbplanpagos delete
   */
  export type cbplanpagosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbplanpagos
     */
    select?: cbplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbplanpagos
     */
    omit?: cbplanpagosOmit<ExtArgs> | null
    /**
     * Filter which cbplanpagos to delete.
     */
    where: cbplanpagosWhereUniqueInput
  }

  /**
   * cbplanpagos deleteMany
   */
  export type cbplanpagosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cbplanpagos to delete
     */
    where?: cbplanpagosWhereInput
    /**
     * Limit how many cbplanpagos to delete.
     */
    limit?: number
  }

  /**
   * cbplanpagos without action
   */
  export type cbplanpagosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbplanpagos
     */
    select?: cbplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbplanpagos
     */
    omit?: cbplanpagosOmit<ExtArgs> | null
  }


  /**
   * Model cbsolicimat
   */

  export type AggregateCbsolicimat = {
    _count: CbsolicimatCountAggregateOutputType | null
    _avg: CbsolicimatAvgAggregateOutputType | null
    _sum: CbsolicimatSumAggregateOutputType | null
    _min: CbsolicimatMinAggregateOutputType | null
    _max: CbsolicimatMaxAggregateOutputType | null
  }

  export type CbsolicimatAvgAggregateOutputType = {
    solicitudnumero: number | null
    numerocontrol: number | null
  }

  export type CbsolicimatSumAggregateOutputType = {
    solicitudnumero: number | null
    numerocontrol: number | null
  }

  export type CbsolicimatMinAggregateOutputType = {
    solicitudnumero: number | null
    empresa: string | null
    codigoobra: string | null
    descripcionobra: string | null
    numerocontrol: number | null
    solicitanteuser: string | null
    solicitantecodigo: string | null
    fechasolicitud: Date | null
    fechautilizacion: Date | null
    observacion: string | null
    actividad: string | null
    direccionentrega: string | null
    fecharevisado: Date | null
    revisadopor: string | null
    registradopor: string | null
    revisado: boolean | null
    procesado: boolean | null
    anulado: boolean | null
  }

  export type CbsolicimatMaxAggregateOutputType = {
    solicitudnumero: number | null
    empresa: string | null
    codigoobra: string | null
    descripcionobra: string | null
    numerocontrol: number | null
    solicitanteuser: string | null
    solicitantecodigo: string | null
    fechasolicitud: Date | null
    fechautilizacion: Date | null
    observacion: string | null
    actividad: string | null
    direccionentrega: string | null
    fecharevisado: Date | null
    revisadopor: string | null
    registradopor: string | null
    revisado: boolean | null
    procesado: boolean | null
    anulado: boolean | null
  }

  export type CbsolicimatCountAggregateOutputType = {
    solicitudnumero: number
    empresa: number
    codigoobra: number
    descripcionobra: number
    numerocontrol: number
    solicitanteuser: number
    solicitantecodigo: number
    fechasolicitud: number
    fechautilizacion: number
    observacion: number
    actividad: number
    direccionentrega: number
    fecharevisado: number
    revisadopor: number
    registradopor: number
    revisado: number
    procesado: number
    anulado: number
    _all: number
  }


  export type CbsolicimatAvgAggregateInputType = {
    solicitudnumero?: true
    numerocontrol?: true
  }

  export type CbsolicimatSumAggregateInputType = {
    solicitudnumero?: true
    numerocontrol?: true
  }

  export type CbsolicimatMinAggregateInputType = {
    solicitudnumero?: true
    empresa?: true
    codigoobra?: true
    descripcionobra?: true
    numerocontrol?: true
    solicitanteuser?: true
    solicitantecodigo?: true
    fechasolicitud?: true
    fechautilizacion?: true
    observacion?: true
    actividad?: true
    direccionentrega?: true
    fecharevisado?: true
    revisadopor?: true
    registradopor?: true
    revisado?: true
    procesado?: true
    anulado?: true
  }

  export type CbsolicimatMaxAggregateInputType = {
    solicitudnumero?: true
    empresa?: true
    codigoobra?: true
    descripcionobra?: true
    numerocontrol?: true
    solicitanteuser?: true
    solicitantecodigo?: true
    fechasolicitud?: true
    fechautilizacion?: true
    observacion?: true
    actividad?: true
    direccionentrega?: true
    fecharevisado?: true
    revisadopor?: true
    registradopor?: true
    revisado?: true
    procesado?: true
    anulado?: true
  }

  export type CbsolicimatCountAggregateInputType = {
    solicitudnumero?: true
    empresa?: true
    codigoobra?: true
    descripcionobra?: true
    numerocontrol?: true
    solicitanteuser?: true
    solicitantecodigo?: true
    fechasolicitud?: true
    fechautilizacion?: true
    observacion?: true
    actividad?: true
    direccionentrega?: true
    fecharevisado?: true
    revisadopor?: true
    registradopor?: true
    revisado?: true
    procesado?: true
    anulado?: true
    _all?: true
  }

  export type CbsolicimatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cbsolicimat to aggregate.
     */
    where?: cbsolicimatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbsolicimats to fetch.
     */
    orderBy?: cbsolicimatOrderByWithRelationInput | cbsolicimatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cbsolicimatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbsolicimats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbsolicimats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cbsolicimats
    **/
    _count?: true | CbsolicimatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CbsolicimatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CbsolicimatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CbsolicimatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CbsolicimatMaxAggregateInputType
  }

  export type GetCbsolicimatAggregateType<T extends CbsolicimatAggregateArgs> = {
        [P in keyof T & keyof AggregateCbsolicimat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCbsolicimat[P]>
      : GetScalarType<T[P], AggregateCbsolicimat[P]>
  }




  export type cbsolicimatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cbsolicimatWhereInput
    orderBy?: cbsolicimatOrderByWithAggregationInput | cbsolicimatOrderByWithAggregationInput[]
    by: CbsolicimatScalarFieldEnum[] | CbsolicimatScalarFieldEnum
    having?: cbsolicimatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CbsolicimatCountAggregateInputType | true
    _avg?: CbsolicimatAvgAggregateInputType
    _sum?: CbsolicimatSumAggregateInputType
    _min?: CbsolicimatMinAggregateInputType
    _max?: CbsolicimatMaxAggregateInputType
  }

  export type CbsolicimatGroupByOutputType = {
    solicitudnumero: number
    empresa: string
    codigoobra: string
    descripcionobra: string
    numerocontrol: number
    solicitanteuser: string | null
    solicitantecodigo: string | null
    fechasolicitud: Date
    fechautilizacion: Date
    observacion: string
    actividad: string
    direccionentrega: string
    fecharevisado: Date | null
    revisadopor: string | null
    registradopor: string
    revisado: boolean
    procesado: boolean
    anulado: boolean
    _count: CbsolicimatCountAggregateOutputType | null
    _avg: CbsolicimatAvgAggregateOutputType | null
    _sum: CbsolicimatSumAggregateOutputType | null
    _min: CbsolicimatMinAggregateOutputType | null
    _max: CbsolicimatMaxAggregateOutputType | null
  }

  type GetCbsolicimatGroupByPayload<T extends cbsolicimatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CbsolicimatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CbsolicimatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CbsolicimatGroupByOutputType[P]>
            : GetScalarType<T[P], CbsolicimatGroupByOutputType[P]>
        }
      >
    >


  export type cbsolicimatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    solicitudnumero?: boolean
    empresa?: boolean
    codigoobra?: boolean
    descripcionobra?: boolean
    numerocontrol?: boolean
    solicitanteuser?: boolean
    solicitantecodigo?: boolean
    fechasolicitud?: boolean
    fechautilizacion?: boolean
    observacion?: boolean
    actividad?: boolean
    direccionentrega?: boolean
    fecharevisado?: boolean
    revisadopor?: boolean
    registradopor?: boolean
    revisado?: boolean
    procesado?: boolean
    anulado?: boolean
  }, ExtArgs["result"]["cbsolicimat"]>



  export type cbsolicimatSelectScalar = {
    solicitudnumero?: boolean
    empresa?: boolean
    codigoobra?: boolean
    descripcionobra?: boolean
    numerocontrol?: boolean
    solicitanteuser?: boolean
    solicitantecodigo?: boolean
    fechasolicitud?: boolean
    fechautilizacion?: boolean
    observacion?: boolean
    actividad?: boolean
    direccionentrega?: boolean
    fecharevisado?: boolean
    revisadopor?: boolean
    registradopor?: boolean
    revisado?: boolean
    procesado?: boolean
    anulado?: boolean
  }

  export type cbsolicimatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"solicitudnumero" | "empresa" | "codigoobra" | "descripcionobra" | "numerocontrol" | "solicitanteuser" | "solicitantecodigo" | "fechasolicitud" | "fechautilizacion" | "observacion" | "actividad" | "direccionentrega" | "fecharevisado" | "revisadopor" | "registradopor" | "revisado" | "procesado" | "anulado", ExtArgs["result"]["cbsolicimat"]>

  export type $cbsolicimatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cbsolicimat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      solicitudnumero: number
      empresa: string
      codigoobra: string
      descripcionobra: string
      numerocontrol: number
      solicitanteuser: string | null
      solicitantecodigo: string | null
      fechasolicitud: Date
      fechautilizacion: Date
      observacion: string
      actividad: string
      direccionentrega: string
      fecharevisado: Date | null
      revisadopor: string | null
      registradopor: string
      revisado: boolean
      procesado: boolean
      anulado: boolean
    }, ExtArgs["result"]["cbsolicimat"]>
    composites: {}
  }

  type cbsolicimatGetPayload<S extends boolean | null | undefined | cbsolicimatDefaultArgs> = $Result.GetResult<Prisma.$cbsolicimatPayload, S>

  type cbsolicimatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cbsolicimatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CbsolicimatCountAggregateInputType | true
    }

  export interface cbsolicimatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cbsolicimat'], meta: { name: 'cbsolicimat' } }
    /**
     * Find zero or one Cbsolicimat that matches the filter.
     * @param {cbsolicimatFindUniqueArgs} args - Arguments to find a Cbsolicimat
     * @example
     * // Get one Cbsolicimat
     * const cbsolicimat = await prisma.cbsolicimat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cbsolicimatFindUniqueArgs>(args: SelectSubset<T, cbsolicimatFindUniqueArgs<ExtArgs>>): Prisma__cbsolicimatClient<$Result.GetResult<Prisma.$cbsolicimatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cbsolicimat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cbsolicimatFindUniqueOrThrowArgs} args - Arguments to find a Cbsolicimat
     * @example
     * // Get one Cbsolicimat
     * const cbsolicimat = await prisma.cbsolicimat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cbsolicimatFindUniqueOrThrowArgs>(args: SelectSubset<T, cbsolicimatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cbsolicimatClient<$Result.GetResult<Prisma.$cbsolicimatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cbsolicimat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbsolicimatFindFirstArgs} args - Arguments to find a Cbsolicimat
     * @example
     * // Get one Cbsolicimat
     * const cbsolicimat = await prisma.cbsolicimat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cbsolicimatFindFirstArgs>(args?: SelectSubset<T, cbsolicimatFindFirstArgs<ExtArgs>>): Prisma__cbsolicimatClient<$Result.GetResult<Prisma.$cbsolicimatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cbsolicimat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbsolicimatFindFirstOrThrowArgs} args - Arguments to find a Cbsolicimat
     * @example
     * // Get one Cbsolicimat
     * const cbsolicimat = await prisma.cbsolicimat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cbsolicimatFindFirstOrThrowArgs>(args?: SelectSubset<T, cbsolicimatFindFirstOrThrowArgs<ExtArgs>>): Prisma__cbsolicimatClient<$Result.GetResult<Prisma.$cbsolicimatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cbsolicimats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbsolicimatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cbsolicimats
     * const cbsolicimats = await prisma.cbsolicimat.findMany()
     * 
     * // Get first 10 Cbsolicimats
     * const cbsolicimats = await prisma.cbsolicimat.findMany({ take: 10 })
     * 
     * // Only select the `solicitudnumero`
     * const cbsolicimatWithSolicitudnumeroOnly = await prisma.cbsolicimat.findMany({ select: { solicitudnumero: true } })
     * 
     */
    findMany<T extends cbsolicimatFindManyArgs>(args?: SelectSubset<T, cbsolicimatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cbsolicimatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cbsolicimat.
     * @param {cbsolicimatCreateArgs} args - Arguments to create a Cbsolicimat.
     * @example
     * // Create one Cbsolicimat
     * const Cbsolicimat = await prisma.cbsolicimat.create({
     *   data: {
     *     // ... data to create a Cbsolicimat
     *   }
     * })
     * 
     */
    create<T extends cbsolicimatCreateArgs>(args: SelectSubset<T, cbsolicimatCreateArgs<ExtArgs>>): Prisma__cbsolicimatClient<$Result.GetResult<Prisma.$cbsolicimatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cbsolicimats.
     * @param {cbsolicimatCreateManyArgs} args - Arguments to create many Cbsolicimats.
     * @example
     * // Create many Cbsolicimats
     * const cbsolicimat = await prisma.cbsolicimat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cbsolicimatCreateManyArgs>(args?: SelectSubset<T, cbsolicimatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cbsolicimat.
     * @param {cbsolicimatDeleteArgs} args - Arguments to delete one Cbsolicimat.
     * @example
     * // Delete one Cbsolicimat
     * const Cbsolicimat = await prisma.cbsolicimat.delete({
     *   where: {
     *     // ... filter to delete one Cbsolicimat
     *   }
     * })
     * 
     */
    delete<T extends cbsolicimatDeleteArgs>(args: SelectSubset<T, cbsolicimatDeleteArgs<ExtArgs>>): Prisma__cbsolicimatClient<$Result.GetResult<Prisma.$cbsolicimatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cbsolicimat.
     * @param {cbsolicimatUpdateArgs} args - Arguments to update one Cbsolicimat.
     * @example
     * // Update one Cbsolicimat
     * const cbsolicimat = await prisma.cbsolicimat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cbsolicimatUpdateArgs>(args: SelectSubset<T, cbsolicimatUpdateArgs<ExtArgs>>): Prisma__cbsolicimatClient<$Result.GetResult<Prisma.$cbsolicimatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cbsolicimats.
     * @param {cbsolicimatDeleteManyArgs} args - Arguments to filter Cbsolicimats to delete.
     * @example
     * // Delete a few Cbsolicimats
     * const { count } = await prisma.cbsolicimat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cbsolicimatDeleteManyArgs>(args?: SelectSubset<T, cbsolicimatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cbsolicimats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbsolicimatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cbsolicimats
     * const cbsolicimat = await prisma.cbsolicimat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cbsolicimatUpdateManyArgs>(args: SelectSubset<T, cbsolicimatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cbsolicimat.
     * @param {cbsolicimatUpsertArgs} args - Arguments to update or create a Cbsolicimat.
     * @example
     * // Update or create a Cbsolicimat
     * const cbsolicimat = await prisma.cbsolicimat.upsert({
     *   create: {
     *     // ... data to create a Cbsolicimat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cbsolicimat we want to update
     *   }
     * })
     */
    upsert<T extends cbsolicimatUpsertArgs>(args: SelectSubset<T, cbsolicimatUpsertArgs<ExtArgs>>): Prisma__cbsolicimatClient<$Result.GetResult<Prisma.$cbsolicimatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cbsolicimats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbsolicimatCountArgs} args - Arguments to filter Cbsolicimats to count.
     * @example
     * // Count the number of Cbsolicimats
     * const count = await prisma.cbsolicimat.count({
     *   where: {
     *     // ... the filter for the Cbsolicimats we want to count
     *   }
     * })
    **/
    count<T extends cbsolicimatCountArgs>(
      args?: Subset<T, cbsolicimatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CbsolicimatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cbsolicimat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CbsolicimatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CbsolicimatAggregateArgs>(args: Subset<T, CbsolicimatAggregateArgs>): Prisma.PrismaPromise<GetCbsolicimatAggregateType<T>>

    /**
     * Group by Cbsolicimat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cbsolicimatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cbsolicimatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cbsolicimatGroupByArgs['orderBy'] }
        : { orderBy?: cbsolicimatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cbsolicimatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCbsolicimatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cbsolicimat model
   */
  readonly fields: cbsolicimatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cbsolicimat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cbsolicimatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cbsolicimat model
   */
  interface cbsolicimatFieldRefs {
    readonly solicitudnumero: FieldRef<"cbsolicimat", 'Int'>
    readonly empresa: FieldRef<"cbsolicimat", 'String'>
    readonly codigoobra: FieldRef<"cbsolicimat", 'String'>
    readonly descripcionobra: FieldRef<"cbsolicimat", 'String'>
    readonly numerocontrol: FieldRef<"cbsolicimat", 'Int'>
    readonly solicitanteuser: FieldRef<"cbsolicimat", 'String'>
    readonly solicitantecodigo: FieldRef<"cbsolicimat", 'String'>
    readonly fechasolicitud: FieldRef<"cbsolicimat", 'DateTime'>
    readonly fechautilizacion: FieldRef<"cbsolicimat", 'DateTime'>
    readonly observacion: FieldRef<"cbsolicimat", 'String'>
    readonly actividad: FieldRef<"cbsolicimat", 'String'>
    readonly direccionentrega: FieldRef<"cbsolicimat", 'String'>
    readonly fecharevisado: FieldRef<"cbsolicimat", 'DateTime'>
    readonly revisadopor: FieldRef<"cbsolicimat", 'String'>
    readonly registradopor: FieldRef<"cbsolicimat", 'String'>
    readonly revisado: FieldRef<"cbsolicimat", 'Boolean'>
    readonly procesado: FieldRef<"cbsolicimat", 'Boolean'>
    readonly anulado: FieldRef<"cbsolicimat", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * cbsolicimat findUnique
   */
  export type cbsolicimatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbsolicimat
     */
    select?: cbsolicimatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbsolicimat
     */
    omit?: cbsolicimatOmit<ExtArgs> | null
    /**
     * Filter, which cbsolicimat to fetch.
     */
    where: cbsolicimatWhereUniqueInput
  }

  /**
   * cbsolicimat findUniqueOrThrow
   */
  export type cbsolicimatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbsolicimat
     */
    select?: cbsolicimatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbsolicimat
     */
    omit?: cbsolicimatOmit<ExtArgs> | null
    /**
     * Filter, which cbsolicimat to fetch.
     */
    where: cbsolicimatWhereUniqueInput
  }

  /**
   * cbsolicimat findFirst
   */
  export type cbsolicimatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbsolicimat
     */
    select?: cbsolicimatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbsolicimat
     */
    omit?: cbsolicimatOmit<ExtArgs> | null
    /**
     * Filter, which cbsolicimat to fetch.
     */
    where?: cbsolicimatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbsolicimats to fetch.
     */
    orderBy?: cbsolicimatOrderByWithRelationInput | cbsolicimatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cbsolicimats.
     */
    cursor?: cbsolicimatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbsolicimats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbsolicimats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cbsolicimats.
     */
    distinct?: CbsolicimatScalarFieldEnum | CbsolicimatScalarFieldEnum[]
  }

  /**
   * cbsolicimat findFirstOrThrow
   */
  export type cbsolicimatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbsolicimat
     */
    select?: cbsolicimatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbsolicimat
     */
    omit?: cbsolicimatOmit<ExtArgs> | null
    /**
     * Filter, which cbsolicimat to fetch.
     */
    where?: cbsolicimatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbsolicimats to fetch.
     */
    orderBy?: cbsolicimatOrderByWithRelationInput | cbsolicimatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cbsolicimats.
     */
    cursor?: cbsolicimatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbsolicimats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbsolicimats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cbsolicimats.
     */
    distinct?: CbsolicimatScalarFieldEnum | CbsolicimatScalarFieldEnum[]
  }

  /**
   * cbsolicimat findMany
   */
  export type cbsolicimatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbsolicimat
     */
    select?: cbsolicimatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbsolicimat
     */
    omit?: cbsolicimatOmit<ExtArgs> | null
    /**
     * Filter, which cbsolicimats to fetch.
     */
    where?: cbsolicimatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cbsolicimats to fetch.
     */
    orderBy?: cbsolicimatOrderByWithRelationInput | cbsolicimatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cbsolicimats.
     */
    cursor?: cbsolicimatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cbsolicimats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cbsolicimats.
     */
    skip?: number
    distinct?: CbsolicimatScalarFieldEnum | CbsolicimatScalarFieldEnum[]
  }

  /**
   * cbsolicimat create
   */
  export type cbsolicimatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbsolicimat
     */
    select?: cbsolicimatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbsolicimat
     */
    omit?: cbsolicimatOmit<ExtArgs> | null
    /**
     * The data needed to create a cbsolicimat.
     */
    data: XOR<cbsolicimatCreateInput, cbsolicimatUncheckedCreateInput>
  }

  /**
   * cbsolicimat createMany
   */
  export type cbsolicimatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cbsolicimats.
     */
    data: cbsolicimatCreateManyInput | cbsolicimatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cbsolicimat update
   */
  export type cbsolicimatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbsolicimat
     */
    select?: cbsolicimatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbsolicimat
     */
    omit?: cbsolicimatOmit<ExtArgs> | null
    /**
     * The data needed to update a cbsolicimat.
     */
    data: XOR<cbsolicimatUpdateInput, cbsolicimatUncheckedUpdateInput>
    /**
     * Choose, which cbsolicimat to update.
     */
    where: cbsolicimatWhereUniqueInput
  }

  /**
   * cbsolicimat updateMany
   */
  export type cbsolicimatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cbsolicimats.
     */
    data: XOR<cbsolicimatUpdateManyMutationInput, cbsolicimatUncheckedUpdateManyInput>
    /**
     * Filter which cbsolicimats to update
     */
    where?: cbsolicimatWhereInput
    /**
     * Limit how many cbsolicimats to update.
     */
    limit?: number
  }

  /**
   * cbsolicimat upsert
   */
  export type cbsolicimatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbsolicimat
     */
    select?: cbsolicimatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbsolicimat
     */
    omit?: cbsolicimatOmit<ExtArgs> | null
    /**
     * The filter to search for the cbsolicimat to update in case it exists.
     */
    where: cbsolicimatWhereUniqueInput
    /**
     * In case the cbsolicimat found by the `where` argument doesn't exist, create a new cbsolicimat with this data.
     */
    create: XOR<cbsolicimatCreateInput, cbsolicimatUncheckedCreateInput>
    /**
     * In case the cbsolicimat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cbsolicimatUpdateInput, cbsolicimatUncheckedUpdateInput>
  }

  /**
   * cbsolicimat delete
   */
  export type cbsolicimatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbsolicimat
     */
    select?: cbsolicimatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbsolicimat
     */
    omit?: cbsolicimatOmit<ExtArgs> | null
    /**
     * Filter which cbsolicimat to delete.
     */
    where: cbsolicimatWhereUniqueInput
  }

  /**
   * cbsolicimat deleteMany
   */
  export type cbsolicimatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cbsolicimats to delete
     */
    where?: cbsolicimatWhereInput
    /**
     * Limit how many cbsolicimats to delete.
     */
    limit?: number
  }

  /**
   * cbsolicimat without action
   */
  export type cbsolicimatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cbsolicimat
     */
    select?: cbsolicimatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cbsolicimat
     */
    omit?: cbsolicimatOmit<ExtArgs> | null
  }


  /**
   * Model clbancoprov
   */

  export type AggregateClbancoprov = {
    _count: ClbancoprovCountAggregateOutputType | null
    _avg: ClbancoprovAvgAggregateOutputType | null
    _sum: ClbancoprovSumAggregateOutputType | null
    _min: ClbancoprovMinAggregateOutputType | null
    _max: ClbancoprovMaxAggregateOutputType | null
  }

  export type ClbancoprovAvgAggregateOutputType = {
    numerocuenta: number | null
  }

  export type ClbancoprovSumAggregateOutputType = {
    numerocuenta: number | null
  }

  export type ClbancoprovMinAggregateOutputType = {
    numerocuenta: number | null
    beneficiario: string | null
    titularcuenta: string | null
    cuentabanco: string | null
    banco: string | null
    codigobanco: string | null
    codigoswift: string | null
    tipocuenta: string | null
    rifproveedor: string | null
  }

  export type ClbancoprovMaxAggregateOutputType = {
    numerocuenta: number | null
    beneficiario: string | null
    titularcuenta: string | null
    cuentabanco: string | null
    banco: string | null
    codigobanco: string | null
    codigoswift: string | null
    tipocuenta: string | null
    rifproveedor: string | null
  }

  export type ClbancoprovCountAggregateOutputType = {
    numerocuenta: number
    beneficiario: number
    titularcuenta: number
    cuentabanco: number
    banco: number
    codigobanco: number
    codigoswift: number
    tipocuenta: number
    rifproveedor: number
    _all: number
  }


  export type ClbancoprovAvgAggregateInputType = {
    numerocuenta?: true
  }

  export type ClbancoprovSumAggregateInputType = {
    numerocuenta?: true
  }

  export type ClbancoprovMinAggregateInputType = {
    numerocuenta?: true
    beneficiario?: true
    titularcuenta?: true
    cuentabanco?: true
    banco?: true
    codigobanco?: true
    codigoswift?: true
    tipocuenta?: true
    rifproveedor?: true
  }

  export type ClbancoprovMaxAggregateInputType = {
    numerocuenta?: true
    beneficiario?: true
    titularcuenta?: true
    cuentabanco?: true
    banco?: true
    codigobanco?: true
    codigoswift?: true
    tipocuenta?: true
    rifproveedor?: true
  }

  export type ClbancoprovCountAggregateInputType = {
    numerocuenta?: true
    beneficiario?: true
    titularcuenta?: true
    cuentabanco?: true
    banco?: true
    codigobanco?: true
    codigoswift?: true
    tipocuenta?: true
    rifproveedor?: true
    _all?: true
  }

  export type ClbancoprovAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clbancoprov to aggregate.
     */
    where?: clbancoprovWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clbancoprovs to fetch.
     */
    orderBy?: clbancoprovOrderByWithRelationInput | clbancoprovOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clbancoprovWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clbancoprovs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clbancoprovs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clbancoprovs
    **/
    _count?: true | ClbancoprovCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClbancoprovAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClbancoprovSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClbancoprovMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClbancoprovMaxAggregateInputType
  }

  export type GetClbancoprovAggregateType<T extends ClbancoprovAggregateArgs> = {
        [P in keyof T & keyof AggregateClbancoprov]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClbancoprov[P]>
      : GetScalarType<T[P], AggregateClbancoprov[P]>
  }




  export type clbancoprovGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clbancoprovWhereInput
    orderBy?: clbancoprovOrderByWithAggregationInput | clbancoprovOrderByWithAggregationInput[]
    by: ClbancoprovScalarFieldEnum[] | ClbancoprovScalarFieldEnum
    having?: clbancoprovScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClbancoprovCountAggregateInputType | true
    _avg?: ClbancoprovAvgAggregateInputType
    _sum?: ClbancoprovSumAggregateInputType
    _min?: ClbancoprovMinAggregateInputType
    _max?: ClbancoprovMaxAggregateInputType
  }

  export type ClbancoprovGroupByOutputType = {
    numerocuenta: number
    beneficiario: string
    titularcuenta: string | null
    cuentabanco: string | null
    banco: string | null
    codigobanco: string | null
    codigoswift: string | null
    tipocuenta: string | null
    rifproveedor: string
    _count: ClbancoprovCountAggregateOutputType | null
    _avg: ClbancoprovAvgAggregateOutputType | null
    _sum: ClbancoprovSumAggregateOutputType | null
    _min: ClbancoprovMinAggregateOutputType | null
    _max: ClbancoprovMaxAggregateOutputType | null
  }

  type GetClbancoprovGroupByPayload<T extends clbancoprovGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClbancoprovGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClbancoprovGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClbancoprovGroupByOutputType[P]>
            : GetScalarType<T[P], ClbancoprovGroupByOutputType[P]>
        }
      >
    >


  export type clbancoprovSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    numerocuenta?: boolean
    beneficiario?: boolean
    titularcuenta?: boolean
    cuentabanco?: boolean
    banco?: boolean
    codigobanco?: boolean
    codigoswift?: boolean
    tipocuenta?: boolean
    rifproveedor?: boolean
  }, ExtArgs["result"]["clbancoprov"]>



  export type clbancoprovSelectScalar = {
    numerocuenta?: boolean
    beneficiario?: boolean
    titularcuenta?: boolean
    cuentabanco?: boolean
    banco?: boolean
    codigobanco?: boolean
    codigoswift?: boolean
    tipocuenta?: boolean
    rifproveedor?: boolean
  }

  export type clbancoprovOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"numerocuenta" | "beneficiario" | "titularcuenta" | "cuentabanco" | "banco" | "codigobanco" | "codigoswift" | "tipocuenta" | "rifproveedor", ExtArgs["result"]["clbancoprov"]>

  export type $clbancoprovPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clbancoprov"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      numerocuenta: number
      beneficiario: string
      titularcuenta: string | null
      cuentabanco: string | null
      banco: string | null
      codigobanco: string | null
      codigoswift: string | null
      tipocuenta: string | null
      rifproveedor: string
    }, ExtArgs["result"]["clbancoprov"]>
    composites: {}
  }

  type clbancoprovGetPayload<S extends boolean | null | undefined | clbancoprovDefaultArgs> = $Result.GetResult<Prisma.$clbancoprovPayload, S>

  type clbancoprovCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clbancoprovFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClbancoprovCountAggregateInputType | true
    }

  export interface clbancoprovDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clbancoprov'], meta: { name: 'clbancoprov' } }
    /**
     * Find zero or one Clbancoprov that matches the filter.
     * @param {clbancoprovFindUniqueArgs} args - Arguments to find a Clbancoprov
     * @example
     * // Get one Clbancoprov
     * const clbancoprov = await prisma.clbancoprov.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clbancoprovFindUniqueArgs>(args: SelectSubset<T, clbancoprovFindUniqueArgs<ExtArgs>>): Prisma__clbancoprovClient<$Result.GetResult<Prisma.$clbancoprovPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clbancoprov that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clbancoprovFindUniqueOrThrowArgs} args - Arguments to find a Clbancoprov
     * @example
     * // Get one Clbancoprov
     * const clbancoprov = await prisma.clbancoprov.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clbancoprovFindUniqueOrThrowArgs>(args: SelectSubset<T, clbancoprovFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clbancoprovClient<$Result.GetResult<Prisma.$clbancoprovPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clbancoprov that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clbancoprovFindFirstArgs} args - Arguments to find a Clbancoprov
     * @example
     * // Get one Clbancoprov
     * const clbancoprov = await prisma.clbancoprov.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clbancoprovFindFirstArgs>(args?: SelectSubset<T, clbancoprovFindFirstArgs<ExtArgs>>): Prisma__clbancoprovClient<$Result.GetResult<Prisma.$clbancoprovPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clbancoprov that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clbancoprovFindFirstOrThrowArgs} args - Arguments to find a Clbancoprov
     * @example
     * // Get one Clbancoprov
     * const clbancoprov = await prisma.clbancoprov.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clbancoprovFindFirstOrThrowArgs>(args?: SelectSubset<T, clbancoprovFindFirstOrThrowArgs<ExtArgs>>): Prisma__clbancoprovClient<$Result.GetResult<Prisma.$clbancoprovPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clbancoprovs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clbancoprovFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clbancoprovs
     * const clbancoprovs = await prisma.clbancoprov.findMany()
     * 
     * // Get first 10 Clbancoprovs
     * const clbancoprovs = await prisma.clbancoprov.findMany({ take: 10 })
     * 
     * // Only select the `numerocuenta`
     * const clbancoprovWithNumerocuentaOnly = await prisma.clbancoprov.findMany({ select: { numerocuenta: true } })
     * 
     */
    findMany<T extends clbancoprovFindManyArgs>(args?: SelectSubset<T, clbancoprovFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clbancoprovPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clbancoprov.
     * @param {clbancoprovCreateArgs} args - Arguments to create a Clbancoprov.
     * @example
     * // Create one Clbancoprov
     * const Clbancoprov = await prisma.clbancoprov.create({
     *   data: {
     *     // ... data to create a Clbancoprov
     *   }
     * })
     * 
     */
    create<T extends clbancoprovCreateArgs>(args: SelectSubset<T, clbancoprovCreateArgs<ExtArgs>>): Prisma__clbancoprovClient<$Result.GetResult<Prisma.$clbancoprovPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clbancoprovs.
     * @param {clbancoprovCreateManyArgs} args - Arguments to create many Clbancoprovs.
     * @example
     * // Create many Clbancoprovs
     * const clbancoprov = await prisma.clbancoprov.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clbancoprovCreateManyArgs>(args?: SelectSubset<T, clbancoprovCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clbancoprov.
     * @param {clbancoprovDeleteArgs} args - Arguments to delete one Clbancoprov.
     * @example
     * // Delete one Clbancoprov
     * const Clbancoprov = await prisma.clbancoprov.delete({
     *   where: {
     *     // ... filter to delete one Clbancoprov
     *   }
     * })
     * 
     */
    delete<T extends clbancoprovDeleteArgs>(args: SelectSubset<T, clbancoprovDeleteArgs<ExtArgs>>): Prisma__clbancoprovClient<$Result.GetResult<Prisma.$clbancoprovPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clbancoprov.
     * @param {clbancoprovUpdateArgs} args - Arguments to update one Clbancoprov.
     * @example
     * // Update one Clbancoprov
     * const clbancoprov = await prisma.clbancoprov.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clbancoprovUpdateArgs>(args: SelectSubset<T, clbancoprovUpdateArgs<ExtArgs>>): Prisma__clbancoprovClient<$Result.GetResult<Prisma.$clbancoprovPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clbancoprovs.
     * @param {clbancoprovDeleteManyArgs} args - Arguments to filter Clbancoprovs to delete.
     * @example
     * // Delete a few Clbancoprovs
     * const { count } = await prisma.clbancoprov.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clbancoprovDeleteManyArgs>(args?: SelectSubset<T, clbancoprovDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clbancoprovs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clbancoprovUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clbancoprovs
     * const clbancoprov = await prisma.clbancoprov.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clbancoprovUpdateManyArgs>(args: SelectSubset<T, clbancoprovUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clbancoprov.
     * @param {clbancoprovUpsertArgs} args - Arguments to update or create a Clbancoprov.
     * @example
     * // Update or create a Clbancoprov
     * const clbancoprov = await prisma.clbancoprov.upsert({
     *   create: {
     *     // ... data to create a Clbancoprov
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clbancoprov we want to update
     *   }
     * })
     */
    upsert<T extends clbancoprovUpsertArgs>(args: SelectSubset<T, clbancoprovUpsertArgs<ExtArgs>>): Prisma__clbancoprovClient<$Result.GetResult<Prisma.$clbancoprovPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clbancoprovs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clbancoprovCountArgs} args - Arguments to filter Clbancoprovs to count.
     * @example
     * // Count the number of Clbancoprovs
     * const count = await prisma.clbancoprov.count({
     *   where: {
     *     // ... the filter for the Clbancoprovs we want to count
     *   }
     * })
    **/
    count<T extends clbancoprovCountArgs>(
      args?: Subset<T, clbancoprovCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClbancoprovCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clbancoprov.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClbancoprovAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClbancoprovAggregateArgs>(args: Subset<T, ClbancoprovAggregateArgs>): Prisma.PrismaPromise<GetClbancoprovAggregateType<T>>

    /**
     * Group by Clbancoprov.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clbancoprovGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clbancoprovGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clbancoprovGroupByArgs['orderBy'] }
        : { orderBy?: clbancoprovGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clbancoprovGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClbancoprovGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clbancoprov model
   */
  readonly fields: clbancoprovFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clbancoprov.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clbancoprovClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clbancoprov model
   */
  interface clbancoprovFieldRefs {
    readonly numerocuenta: FieldRef<"clbancoprov", 'Int'>
    readonly beneficiario: FieldRef<"clbancoprov", 'String'>
    readonly titularcuenta: FieldRef<"clbancoprov", 'String'>
    readonly cuentabanco: FieldRef<"clbancoprov", 'String'>
    readonly banco: FieldRef<"clbancoprov", 'String'>
    readonly codigobanco: FieldRef<"clbancoprov", 'String'>
    readonly codigoswift: FieldRef<"clbancoprov", 'String'>
    readonly tipocuenta: FieldRef<"clbancoprov", 'String'>
    readonly rifproveedor: FieldRef<"clbancoprov", 'String'>
  }
    

  // Custom InputTypes
  /**
   * clbancoprov findUnique
   */
  export type clbancoprovFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoprov
     */
    select?: clbancoprovSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoprov
     */
    omit?: clbancoprovOmit<ExtArgs> | null
    /**
     * Filter, which clbancoprov to fetch.
     */
    where: clbancoprovWhereUniqueInput
  }

  /**
   * clbancoprov findUniqueOrThrow
   */
  export type clbancoprovFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoprov
     */
    select?: clbancoprovSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoprov
     */
    omit?: clbancoprovOmit<ExtArgs> | null
    /**
     * Filter, which clbancoprov to fetch.
     */
    where: clbancoprovWhereUniqueInput
  }

  /**
   * clbancoprov findFirst
   */
  export type clbancoprovFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoprov
     */
    select?: clbancoprovSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoprov
     */
    omit?: clbancoprovOmit<ExtArgs> | null
    /**
     * Filter, which clbancoprov to fetch.
     */
    where?: clbancoprovWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clbancoprovs to fetch.
     */
    orderBy?: clbancoprovOrderByWithRelationInput | clbancoprovOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clbancoprovs.
     */
    cursor?: clbancoprovWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clbancoprovs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clbancoprovs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clbancoprovs.
     */
    distinct?: ClbancoprovScalarFieldEnum | ClbancoprovScalarFieldEnum[]
  }

  /**
   * clbancoprov findFirstOrThrow
   */
  export type clbancoprovFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoprov
     */
    select?: clbancoprovSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoprov
     */
    omit?: clbancoprovOmit<ExtArgs> | null
    /**
     * Filter, which clbancoprov to fetch.
     */
    where?: clbancoprovWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clbancoprovs to fetch.
     */
    orderBy?: clbancoprovOrderByWithRelationInput | clbancoprovOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clbancoprovs.
     */
    cursor?: clbancoprovWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clbancoprovs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clbancoprovs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clbancoprovs.
     */
    distinct?: ClbancoprovScalarFieldEnum | ClbancoprovScalarFieldEnum[]
  }

  /**
   * clbancoprov findMany
   */
  export type clbancoprovFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoprov
     */
    select?: clbancoprovSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoprov
     */
    omit?: clbancoprovOmit<ExtArgs> | null
    /**
     * Filter, which clbancoprovs to fetch.
     */
    where?: clbancoprovWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clbancoprovs to fetch.
     */
    orderBy?: clbancoprovOrderByWithRelationInput | clbancoprovOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clbancoprovs.
     */
    cursor?: clbancoprovWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clbancoprovs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clbancoprovs.
     */
    skip?: number
    distinct?: ClbancoprovScalarFieldEnum | ClbancoprovScalarFieldEnum[]
  }

  /**
   * clbancoprov create
   */
  export type clbancoprovCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoprov
     */
    select?: clbancoprovSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoprov
     */
    omit?: clbancoprovOmit<ExtArgs> | null
    /**
     * The data needed to create a clbancoprov.
     */
    data: XOR<clbancoprovCreateInput, clbancoprovUncheckedCreateInput>
  }

  /**
   * clbancoprov createMany
   */
  export type clbancoprovCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clbancoprovs.
     */
    data: clbancoprovCreateManyInput | clbancoprovCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clbancoprov update
   */
  export type clbancoprovUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoprov
     */
    select?: clbancoprovSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoprov
     */
    omit?: clbancoprovOmit<ExtArgs> | null
    /**
     * The data needed to update a clbancoprov.
     */
    data: XOR<clbancoprovUpdateInput, clbancoprovUncheckedUpdateInput>
    /**
     * Choose, which clbancoprov to update.
     */
    where: clbancoprovWhereUniqueInput
  }

  /**
   * clbancoprov updateMany
   */
  export type clbancoprovUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clbancoprovs.
     */
    data: XOR<clbancoprovUpdateManyMutationInput, clbancoprovUncheckedUpdateManyInput>
    /**
     * Filter which clbancoprovs to update
     */
    where?: clbancoprovWhereInput
    /**
     * Limit how many clbancoprovs to update.
     */
    limit?: number
  }

  /**
   * clbancoprov upsert
   */
  export type clbancoprovUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoprov
     */
    select?: clbancoprovSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoprov
     */
    omit?: clbancoprovOmit<ExtArgs> | null
    /**
     * The filter to search for the clbancoprov to update in case it exists.
     */
    where: clbancoprovWhereUniqueInput
    /**
     * In case the clbancoprov found by the `where` argument doesn't exist, create a new clbancoprov with this data.
     */
    create: XOR<clbancoprovCreateInput, clbancoprovUncheckedCreateInput>
    /**
     * In case the clbancoprov was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clbancoprovUpdateInput, clbancoprovUncheckedUpdateInput>
  }

  /**
   * clbancoprov delete
   */
  export type clbancoprovDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoprov
     */
    select?: clbancoprovSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoprov
     */
    omit?: clbancoprovOmit<ExtArgs> | null
    /**
     * Filter which clbancoprov to delete.
     */
    where: clbancoprovWhereUniqueInput
  }

  /**
   * clbancoprov deleteMany
   */
  export type clbancoprovDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clbancoprovs to delete
     */
    where?: clbancoprovWhereInput
    /**
     * Limit how many clbancoprovs to delete.
     */
    limit?: number
  }

  /**
   * clbancoprov without action
   */
  export type clbancoprovDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoprov
     */
    select?: clbancoprovSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoprov
     */
    omit?: clbancoprovOmit<ExtArgs> | null
  }


  /**
   * Model clbancoswift
   */

  export type AggregateClbancoswift = {
    _count: ClbancoswiftCountAggregateOutputType | null
    _min: ClbancoswiftMinAggregateOutputType | null
    _max: ClbancoswiftMaxAggregateOutputType | null
  }

  export type ClbancoswiftMinAggregateOutputType = {
    codigobanco: string | null
    codigoswift: string | null
    nombrecorto: string | null
    tipocuenta: string | null
  }

  export type ClbancoswiftMaxAggregateOutputType = {
    codigobanco: string | null
    codigoswift: string | null
    nombrecorto: string | null
    tipocuenta: string | null
  }

  export type ClbancoswiftCountAggregateOutputType = {
    codigobanco: number
    codigoswift: number
    nombrecorto: number
    tipocuenta: number
    _all: number
  }


  export type ClbancoswiftMinAggregateInputType = {
    codigobanco?: true
    codigoswift?: true
    nombrecorto?: true
    tipocuenta?: true
  }

  export type ClbancoswiftMaxAggregateInputType = {
    codigobanco?: true
    codigoswift?: true
    nombrecorto?: true
    tipocuenta?: true
  }

  export type ClbancoswiftCountAggregateInputType = {
    codigobanco?: true
    codigoswift?: true
    nombrecorto?: true
    tipocuenta?: true
    _all?: true
  }

  export type ClbancoswiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clbancoswift to aggregate.
     */
    where?: clbancoswiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clbancoswifts to fetch.
     */
    orderBy?: clbancoswiftOrderByWithRelationInput | clbancoswiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clbancoswiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clbancoswifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clbancoswifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clbancoswifts
    **/
    _count?: true | ClbancoswiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClbancoswiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClbancoswiftMaxAggregateInputType
  }

  export type GetClbancoswiftAggregateType<T extends ClbancoswiftAggregateArgs> = {
        [P in keyof T & keyof AggregateClbancoswift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClbancoswift[P]>
      : GetScalarType<T[P], AggregateClbancoswift[P]>
  }




  export type clbancoswiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clbancoswiftWhereInput
    orderBy?: clbancoswiftOrderByWithAggregationInput | clbancoswiftOrderByWithAggregationInput[]
    by: ClbancoswiftScalarFieldEnum[] | ClbancoswiftScalarFieldEnum
    having?: clbancoswiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClbancoswiftCountAggregateInputType | true
    _min?: ClbancoswiftMinAggregateInputType
    _max?: ClbancoswiftMaxAggregateInputType
  }

  export type ClbancoswiftGroupByOutputType = {
    codigobanco: string
    codigoswift: string
    nombrecorto: string
    tipocuenta: string
    _count: ClbancoswiftCountAggregateOutputType | null
    _min: ClbancoswiftMinAggregateOutputType | null
    _max: ClbancoswiftMaxAggregateOutputType | null
  }

  type GetClbancoswiftGroupByPayload<T extends clbancoswiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClbancoswiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClbancoswiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClbancoswiftGroupByOutputType[P]>
            : GetScalarType<T[P], ClbancoswiftGroupByOutputType[P]>
        }
      >
    >


  export type clbancoswiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigobanco?: boolean
    codigoswift?: boolean
    nombrecorto?: boolean
    tipocuenta?: boolean
  }, ExtArgs["result"]["clbancoswift"]>



  export type clbancoswiftSelectScalar = {
    codigobanco?: boolean
    codigoswift?: boolean
    nombrecorto?: boolean
    tipocuenta?: boolean
  }

  export type clbancoswiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigobanco" | "codigoswift" | "nombrecorto" | "tipocuenta", ExtArgs["result"]["clbancoswift"]>

  export type $clbancoswiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clbancoswift"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      codigobanco: string
      codigoswift: string
      nombrecorto: string
      tipocuenta: string
    }, ExtArgs["result"]["clbancoswift"]>
    composites: {}
  }

  type clbancoswiftGetPayload<S extends boolean | null | undefined | clbancoswiftDefaultArgs> = $Result.GetResult<Prisma.$clbancoswiftPayload, S>

  type clbancoswiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clbancoswiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClbancoswiftCountAggregateInputType | true
    }

  export interface clbancoswiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clbancoswift'], meta: { name: 'clbancoswift' } }
    /**
     * Find zero or one Clbancoswift that matches the filter.
     * @param {clbancoswiftFindUniqueArgs} args - Arguments to find a Clbancoswift
     * @example
     * // Get one Clbancoswift
     * const clbancoswift = await prisma.clbancoswift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clbancoswiftFindUniqueArgs>(args: SelectSubset<T, clbancoswiftFindUniqueArgs<ExtArgs>>): Prisma__clbancoswiftClient<$Result.GetResult<Prisma.$clbancoswiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clbancoswift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clbancoswiftFindUniqueOrThrowArgs} args - Arguments to find a Clbancoswift
     * @example
     * // Get one Clbancoswift
     * const clbancoswift = await prisma.clbancoswift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clbancoswiftFindUniqueOrThrowArgs>(args: SelectSubset<T, clbancoswiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clbancoswiftClient<$Result.GetResult<Prisma.$clbancoswiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clbancoswift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clbancoswiftFindFirstArgs} args - Arguments to find a Clbancoswift
     * @example
     * // Get one Clbancoswift
     * const clbancoswift = await prisma.clbancoswift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clbancoswiftFindFirstArgs>(args?: SelectSubset<T, clbancoswiftFindFirstArgs<ExtArgs>>): Prisma__clbancoswiftClient<$Result.GetResult<Prisma.$clbancoswiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clbancoswift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clbancoswiftFindFirstOrThrowArgs} args - Arguments to find a Clbancoswift
     * @example
     * // Get one Clbancoswift
     * const clbancoswift = await prisma.clbancoswift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clbancoswiftFindFirstOrThrowArgs>(args?: SelectSubset<T, clbancoswiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__clbancoswiftClient<$Result.GetResult<Prisma.$clbancoswiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clbancoswifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clbancoswiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clbancoswifts
     * const clbancoswifts = await prisma.clbancoswift.findMany()
     * 
     * // Get first 10 Clbancoswifts
     * const clbancoswifts = await prisma.clbancoswift.findMany({ take: 10 })
     * 
     * // Only select the `codigobanco`
     * const clbancoswiftWithCodigobancoOnly = await prisma.clbancoswift.findMany({ select: { codigobanco: true } })
     * 
     */
    findMany<T extends clbancoswiftFindManyArgs>(args?: SelectSubset<T, clbancoswiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clbancoswiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clbancoswift.
     * @param {clbancoswiftCreateArgs} args - Arguments to create a Clbancoswift.
     * @example
     * // Create one Clbancoswift
     * const Clbancoswift = await prisma.clbancoswift.create({
     *   data: {
     *     // ... data to create a Clbancoswift
     *   }
     * })
     * 
     */
    create<T extends clbancoswiftCreateArgs>(args: SelectSubset<T, clbancoswiftCreateArgs<ExtArgs>>): Prisma__clbancoswiftClient<$Result.GetResult<Prisma.$clbancoswiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clbancoswifts.
     * @param {clbancoswiftCreateManyArgs} args - Arguments to create many Clbancoswifts.
     * @example
     * // Create many Clbancoswifts
     * const clbancoswift = await prisma.clbancoswift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clbancoswiftCreateManyArgs>(args?: SelectSubset<T, clbancoswiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clbancoswift.
     * @param {clbancoswiftDeleteArgs} args - Arguments to delete one Clbancoswift.
     * @example
     * // Delete one Clbancoswift
     * const Clbancoswift = await prisma.clbancoswift.delete({
     *   where: {
     *     // ... filter to delete one Clbancoswift
     *   }
     * })
     * 
     */
    delete<T extends clbancoswiftDeleteArgs>(args: SelectSubset<T, clbancoswiftDeleteArgs<ExtArgs>>): Prisma__clbancoswiftClient<$Result.GetResult<Prisma.$clbancoswiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clbancoswift.
     * @param {clbancoswiftUpdateArgs} args - Arguments to update one Clbancoswift.
     * @example
     * // Update one Clbancoswift
     * const clbancoswift = await prisma.clbancoswift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clbancoswiftUpdateArgs>(args: SelectSubset<T, clbancoswiftUpdateArgs<ExtArgs>>): Prisma__clbancoswiftClient<$Result.GetResult<Prisma.$clbancoswiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clbancoswifts.
     * @param {clbancoswiftDeleteManyArgs} args - Arguments to filter Clbancoswifts to delete.
     * @example
     * // Delete a few Clbancoswifts
     * const { count } = await prisma.clbancoswift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clbancoswiftDeleteManyArgs>(args?: SelectSubset<T, clbancoswiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clbancoswifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clbancoswiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clbancoswifts
     * const clbancoswift = await prisma.clbancoswift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clbancoswiftUpdateManyArgs>(args: SelectSubset<T, clbancoswiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clbancoswift.
     * @param {clbancoswiftUpsertArgs} args - Arguments to update or create a Clbancoswift.
     * @example
     * // Update or create a Clbancoswift
     * const clbancoswift = await prisma.clbancoswift.upsert({
     *   create: {
     *     // ... data to create a Clbancoswift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clbancoswift we want to update
     *   }
     * })
     */
    upsert<T extends clbancoswiftUpsertArgs>(args: SelectSubset<T, clbancoswiftUpsertArgs<ExtArgs>>): Prisma__clbancoswiftClient<$Result.GetResult<Prisma.$clbancoswiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clbancoswifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clbancoswiftCountArgs} args - Arguments to filter Clbancoswifts to count.
     * @example
     * // Count the number of Clbancoswifts
     * const count = await prisma.clbancoswift.count({
     *   where: {
     *     // ... the filter for the Clbancoswifts we want to count
     *   }
     * })
    **/
    count<T extends clbancoswiftCountArgs>(
      args?: Subset<T, clbancoswiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClbancoswiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clbancoswift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClbancoswiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClbancoswiftAggregateArgs>(args: Subset<T, ClbancoswiftAggregateArgs>): Prisma.PrismaPromise<GetClbancoswiftAggregateType<T>>

    /**
     * Group by Clbancoswift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clbancoswiftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clbancoswiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clbancoswiftGroupByArgs['orderBy'] }
        : { orderBy?: clbancoswiftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clbancoswiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClbancoswiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clbancoswift model
   */
  readonly fields: clbancoswiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clbancoswift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clbancoswiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clbancoswift model
   */
  interface clbancoswiftFieldRefs {
    readonly codigobanco: FieldRef<"clbancoswift", 'String'>
    readonly codigoswift: FieldRef<"clbancoswift", 'String'>
    readonly nombrecorto: FieldRef<"clbancoswift", 'String'>
    readonly tipocuenta: FieldRef<"clbancoswift", 'String'>
  }
    

  // Custom InputTypes
  /**
   * clbancoswift findUnique
   */
  export type clbancoswiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoswift
     */
    select?: clbancoswiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoswift
     */
    omit?: clbancoswiftOmit<ExtArgs> | null
    /**
     * Filter, which clbancoswift to fetch.
     */
    where: clbancoswiftWhereUniqueInput
  }

  /**
   * clbancoswift findUniqueOrThrow
   */
  export type clbancoswiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoswift
     */
    select?: clbancoswiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoswift
     */
    omit?: clbancoswiftOmit<ExtArgs> | null
    /**
     * Filter, which clbancoswift to fetch.
     */
    where: clbancoswiftWhereUniqueInput
  }

  /**
   * clbancoswift findFirst
   */
  export type clbancoswiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoswift
     */
    select?: clbancoswiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoswift
     */
    omit?: clbancoswiftOmit<ExtArgs> | null
    /**
     * Filter, which clbancoswift to fetch.
     */
    where?: clbancoswiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clbancoswifts to fetch.
     */
    orderBy?: clbancoswiftOrderByWithRelationInput | clbancoswiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clbancoswifts.
     */
    cursor?: clbancoswiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clbancoswifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clbancoswifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clbancoswifts.
     */
    distinct?: ClbancoswiftScalarFieldEnum | ClbancoswiftScalarFieldEnum[]
  }

  /**
   * clbancoswift findFirstOrThrow
   */
  export type clbancoswiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoswift
     */
    select?: clbancoswiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoswift
     */
    omit?: clbancoswiftOmit<ExtArgs> | null
    /**
     * Filter, which clbancoswift to fetch.
     */
    where?: clbancoswiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clbancoswifts to fetch.
     */
    orderBy?: clbancoswiftOrderByWithRelationInput | clbancoswiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clbancoswifts.
     */
    cursor?: clbancoswiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clbancoswifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clbancoswifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clbancoswifts.
     */
    distinct?: ClbancoswiftScalarFieldEnum | ClbancoswiftScalarFieldEnum[]
  }

  /**
   * clbancoswift findMany
   */
  export type clbancoswiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoswift
     */
    select?: clbancoswiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoswift
     */
    omit?: clbancoswiftOmit<ExtArgs> | null
    /**
     * Filter, which clbancoswifts to fetch.
     */
    where?: clbancoswiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clbancoswifts to fetch.
     */
    orderBy?: clbancoswiftOrderByWithRelationInput | clbancoswiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clbancoswifts.
     */
    cursor?: clbancoswiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clbancoswifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clbancoswifts.
     */
    skip?: number
    distinct?: ClbancoswiftScalarFieldEnum | ClbancoswiftScalarFieldEnum[]
  }

  /**
   * clbancoswift create
   */
  export type clbancoswiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoswift
     */
    select?: clbancoswiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoswift
     */
    omit?: clbancoswiftOmit<ExtArgs> | null
    /**
     * The data needed to create a clbancoswift.
     */
    data: XOR<clbancoswiftCreateInput, clbancoswiftUncheckedCreateInput>
  }

  /**
   * clbancoswift createMany
   */
  export type clbancoswiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clbancoswifts.
     */
    data: clbancoswiftCreateManyInput | clbancoswiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clbancoswift update
   */
  export type clbancoswiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoswift
     */
    select?: clbancoswiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoswift
     */
    omit?: clbancoswiftOmit<ExtArgs> | null
    /**
     * The data needed to update a clbancoswift.
     */
    data: XOR<clbancoswiftUpdateInput, clbancoswiftUncheckedUpdateInput>
    /**
     * Choose, which clbancoswift to update.
     */
    where: clbancoswiftWhereUniqueInput
  }

  /**
   * clbancoswift updateMany
   */
  export type clbancoswiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clbancoswifts.
     */
    data: XOR<clbancoswiftUpdateManyMutationInput, clbancoswiftUncheckedUpdateManyInput>
    /**
     * Filter which clbancoswifts to update
     */
    where?: clbancoswiftWhereInput
    /**
     * Limit how many clbancoswifts to update.
     */
    limit?: number
  }

  /**
   * clbancoswift upsert
   */
  export type clbancoswiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoswift
     */
    select?: clbancoswiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoswift
     */
    omit?: clbancoswiftOmit<ExtArgs> | null
    /**
     * The filter to search for the clbancoswift to update in case it exists.
     */
    where: clbancoswiftWhereUniqueInput
    /**
     * In case the clbancoswift found by the `where` argument doesn't exist, create a new clbancoswift with this data.
     */
    create: XOR<clbancoswiftCreateInput, clbancoswiftUncheckedCreateInput>
    /**
     * In case the clbancoswift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clbancoswiftUpdateInput, clbancoswiftUncheckedUpdateInput>
  }

  /**
   * clbancoswift delete
   */
  export type clbancoswiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoswift
     */
    select?: clbancoswiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoswift
     */
    omit?: clbancoswiftOmit<ExtArgs> | null
    /**
     * Filter which clbancoswift to delete.
     */
    where: clbancoswiftWhereUniqueInput
  }

  /**
   * clbancoswift deleteMany
   */
  export type clbancoswiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clbancoswifts to delete
     */
    where?: clbancoswiftWhereInput
    /**
     * Limit how many clbancoswifts to delete.
     */
    limit?: number
  }

  /**
   * clbancoswift without action
   */
  export type clbancoswiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clbancoswift
     */
    select?: clbancoswiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clbancoswift
     */
    omit?: clbancoswiftOmit<ExtArgs> | null
  }


  /**
   * Model clcategoria
   */

  export type AggregateClcategoria = {
    _count: ClcategoriaCountAggregateOutputType | null
    _min: ClcategoriaMinAggregateOutputType | null
    _max: ClcategoriaMaxAggregateOutputType | null
  }

  export type ClcategoriaMinAggregateOutputType = {
    codcat: string | null
    catdes: string | null
  }

  export type ClcategoriaMaxAggregateOutputType = {
    codcat: string | null
    catdes: string | null
  }

  export type ClcategoriaCountAggregateOutputType = {
    codcat: number
    catdes: number
    _all: number
  }


  export type ClcategoriaMinAggregateInputType = {
    codcat?: true
    catdes?: true
  }

  export type ClcategoriaMaxAggregateInputType = {
    codcat?: true
    catdes?: true
  }

  export type ClcategoriaCountAggregateInputType = {
    codcat?: true
    catdes?: true
    _all?: true
  }

  export type ClcategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clcategoria to aggregate.
     */
    where?: clcategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clcategorias to fetch.
     */
    orderBy?: clcategoriaOrderByWithRelationInput | clcategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clcategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clcategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clcategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clcategorias
    **/
    _count?: true | ClcategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClcategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClcategoriaMaxAggregateInputType
  }

  export type GetClcategoriaAggregateType<T extends ClcategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateClcategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClcategoria[P]>
      : GetScalarType<T[P], AggregateClcategoria[P]>
  }




  export type clcategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clcategoriaWhereInput
    orderBy?: clcategoriaOrderByWithAggregationInput | clcategoriaOrderByWithAggregationInput[]
    by: ClcategoriaScalarFieldEnum[] | ClcategoriaScalarFieldEnum
    having?: clcategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClcategoriaCountAggregateInputType | true
    _min?: ClcategoriaMinAggregateInputType
    _max?: ClcategoriaMaxAggregateInputType
  }

  export type ClcategoriaGroupByOutputType = {
    codcat: string
    catdes: string
    _count: ClcategoriaCountAggregateOutputType | null
    _min: ClcategoriaMinAggregateOutputType | null
    _max: ClcategoriaMaxAggregateOutputType | null
  }

  type GetClcategoriaGroupByPayload<T extends clcategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClcategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClcategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClcategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], ClcategoriaGroupByOutputType[P]>
        }
      >
    >


  export type clcategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codcat?: boolean
    catdes?: boolean
  }, ExtArgs["result"]["clcategoria"]>



  export type clcategoriaSelectScalar = {
    codcat?: boolean
    catdes?: boolean
  }

  export type clcategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codcat" | "catdes", ExtArgs["result"]["clcategoria"]>

  export type $clcategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clcategoria"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      codcat: string
      catdes: string
    }, ExtArgs["result"]["clcategoria"]>
    composites: {}
  }

  type clcategoriaGetPayload<S extends boolean | null | undefined | clcategoriaDefaultArgs> = $Result.GetResult<Prisma.$clcategoriaPayload, S>

  type clcategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clcategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClcategoriaCountAggregateInputType | true
    }

  export interface clcategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clcategoria'], meta: { name: 'clcategoria' } }
    /**
     * Find zero or one Clcategoria that matches the filter.
     * @param {clcategoriaFindUniqueArgs} args - Arguments to find a Clcategoria
     * @example
     * // Get one Clcategoria
     * const clcategoria = await prisma.clcategoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clcategoriaFindUniqueArgs>(args: SelectSubset<T, clcategoriaFindUniqueArgs<ExtArgs>>): Prisma__clcategoriaClient<$Result.GetResult<Prisma.$clcategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clcategoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clcategoriaFindUniqueOrThrowArgs} args - Arguments to find a Clcategoria
     * @example
     * // Get one Clcategoria
     * const clcategoria = await prisma.clcategoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clcategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, clcategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clcategoriaClient<$Result.GetResult<Prisma.$clcategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clcategoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clcategoriaFindFirstArgs} args - Arguments to find a Clcategoria
     * @example
     * // Get one Clcategoria
     * const clcategoria = await prisma.clcategoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clcategoriaFindFirstArgs>(args?: SelectSubset<T, clcategoriaFindFirstArgs<ExtArgs>>): Prisma__clcategoriaClient<$Result.GetResult<Prisma.$clcategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clcategoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clcategoriaFindFirstOrThrowArgs} args - Arguments to find a Clcategoria
     * @example
     * // Get one Clcategoria
     * const clcategoria = await prisma.clcategoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clcategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, clcategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__clcategoriaClient<$Result.GetResult<Prisma.$clcategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clcategorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clcategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clcategorias
     * const clcategorias = await prisma.clcategoria.findMany()
     * 
     * // Get first 10 Clcategorias
     * const clcategorias = await prisma.clcategoria.findMany({ take: 10 })
     * 
     * // Only select the `codcat`
     * const clcategoriaWithCodcatOnly = await prisma.clcategoria.findMany({ select: { codcat: true } })
     * 
     */
    findMany<T extends clcategoriaFindManyArgs>(args?: SelectSubset<T, clcategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clcategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clcategoria.
     * @param {clcategoriaCreateArgs} args - Arguments to create a Clcategoria.
     * @example
     * // Create one Clcategoria
     * const Clcategoria = await prisma.clcategoria.create({
     *   data: {
     *     // ... data to create a Clcategoria
     *   }
     * })
     * 
     */
    create<T extends clcategoriaCreateArgs>(args: SelectSubset<T, clcategoriaCreateArgs<ExtArgs>>): Prisma__clcategoriaClient<$Result.GetResult<Prisma.$clcategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clcategorias.
     * @param {clcategoriaCreateManyArgs} args - Arguments to create many Clcategorias.
     * @example
     * // Create many Clcategorias
     * const clcategoria = await prisma.clcategoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clcategoriaCreateManyArgs>(args?: SelectSubset<T, clcategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clcategoria.
     * @param {clcategoriaDeleteArgs} args - Arguments to delete one Clcategoria.
     * @example
     * // Delete one Clcategoria
     * const Clcategoria = await prisma.clcategoria.delete({
     *   where: {
     *     // ... filter to delete one Clcategoria
     *   }
     * })
     * 
     */
    delete<T extends clcategoriaDeleteArgs>(args: SelectSubset<T, clcategoriaDeleteArgs<ExtArgs>>): Prisma__clcategoriaClient<$Result.GetResult<Prisma.$clcategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clcategoria.
     * @param {clcategoriaUpdateArgs} args - Arguments to update one Clcategoria.
     * @example
     * // Update one Clcategoria
     * const clcategoria = await prisma.clcategoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clcategoriaUpdateArgs>(args: SelectSubset<T, clcategoriaUpdateArgs<ExtArgs>>): Prisma__clcategoriaClient<$Result.GetResult<Prisma.$clcategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clcategorias.
     * @param {clcategoriaDeleteManyArgs} args - Arguments to filter Clcategorias to delete.
     * @example
     * // Delete a few Clcategorias
     * const { count } = await prisma.clcategoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clcategoriaDeleteManyArgs>(args?: SelectSubset<T, clcategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clcategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clcategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clcategorias
     * const clcategoria = await prisma.clcategoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clcategoriaUpdateManyArgs>(args: SelectSubset<T, clcategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clcategoria.
     * @param {clcategoriaUpsertArgs} args - Arguments to update or create a Clcategoria.
     * @example
     * // Update or create a Clcategoria
     * const clcategoria = await prisma.clcategoria.upsert({
     *   create: {
     *     // ... data to create a Clcategoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clcategoria we want to update
     *   }
     * })
     */
    upsert<T extends clcategoriaUpsertArgs>(args: SelectSubset<T, clcategoriaUpsertArgs<ExtArgs>>): Prisma__clcategoriaClient<$Result.GetResult<Prisma.$clcategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clcategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clcategoriaCountArgs} args - Arguments to filter Clcategorias to count.
     * @example
     * // Count the number of Clcategorias
     * const count = await prisma.clcategoria.count({
     *   where: {
     *     // ... the filter for the Clcategorias we want to count
     *   }
     * })
    **/
    count<T extends clcategoriaCountArgs>(
      args?: Subset<T, clcategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClcategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clcategoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClcategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClcategoriaAggregateArgs>(args: Subset<T, ClcategoriaAggregateArgs>): Prisma.PrismaPromise<GetClcategoriaAggregateType<T>>

    /**
     * Group by Clcategoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clcategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clcategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clcategoriaGroupByArgs['orderBy'] }
        : { orderBy?: clcategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clcategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClcategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clcategoria model
   */
  readonly fields: clcategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clcategoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clcategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clcategoria model
   */
  interface clcategoriaFieldRefs {
    readonly codcat: FieldRef<"clcategoria", 'String'>
    readonly catdes: FieldRef<"clcategoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * clcategoria findUnique
   */
  export type clcategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clcategoria
     */
    select?: clcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clcategoria
     */
    omit?: clcategoriaOmit<ExtArgs> | null
    /**
     * Filter, which clcategoria to fetch.
     */
    where: clcategoriaWhereUniqueInput
  }

  /**
   * clcategoria findUniqueOrThrow
   */
  export type clcategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clcategoria
     */
    select?: clcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clcategoria
     */
    omit?: clcategoriaOmit<ExtArgs> | null
    /**
     * Filter, which clcategoria to fetch.
     */
    where: clcategoriaWhereUniqueInput
  }

  /**
   * clcategoria findFirst
   */
  export type clcategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clcategoria
     */
    select?: clcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clcategoria
     */
    omit?: clcategoriaOmit<ExtArgs> | null
    /**
     * Filter, which clcategoria to fetch.
     */
    where?: clcategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clcategorias to fetch.
     */
    orderBy?: clcategoriaOrderByWithRelationInput | clcategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clcategorias.
     */
    cursor?: clcategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clcategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clcategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clcategorias.
     */
    distinct?: ClcategoriaScalarFieldEnum | ClcategoriaScalarFieldEnum[]
  }

  /**
   * clcategoria findFirstOrThrow
   */
  export type clcategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clcategoria
     */
    select?: clcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clcategoria
     */
    omit?: clcategoriaOmit<ExtArgs> | null
    /**
     * Filter, which clcategoria to fetch.
     */
    where?: clcategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clcategorias to fetch.
     */
    orderBy?: clcategoriaOrderByWithRelationInput | clcategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clcategorias.
     */
    cursor?: clcategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clcategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clcategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clcategorias.
     */
    distinct?: ClcategoriaScalarFieldEnum | ClcategoriaScalarFieldEnum[]
  }

  /**
   * clcategoria findMany
   */
  export type clcategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clcategoria
     */
    select?: clcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clcategoria
     */
    omit?: clcategoriaOmit<ExtArgs> | null
    /**
     * Filter, which clcategorias to fetch.
     */
    where?: clcategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clcategorias to fetch.
     */
    orderBy?: clcategoriaOrderByWithRelationInput | clcategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clcategorias.
     */
    cursor?: clcategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clcategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clcategorias.
     */
    skip?: number
    distinct?: ClcategoriaScalarFieldEnum | ClcategoriaScalarFieldEnum[]
  }

  /**
   * clcategoria create
   */
  export type clcategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clcategoria
     */
    select?: clcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clcategoria
     */
    omit?: clcategoriaOmit<ExtArgs> | null
    /**
     * The data needed to create a clcategoria.
     */
    data: XOR<clcategoriaCreateInput, clcategoriaUncheckedCreateInput>
  }

  /**
   * clcategoria createMany
   */
  export type clcategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clcategorias.
     */
    data: clcategoriaCreateManyInput | clcategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clcategoria update
   */
  export type clcategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clcategoria
     */
    select?: clcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clcategoria
     */
    omit?: clcategoriaOmit<ExtArgs> | null
    /**
     * The data needed to update a clcategoria.
     */
    data: XOR<clcategoriaUpdateInput, clcategoriaUncheckedUpdateInput>
    /**
     * Choose, which clcategoria to update.
     */
    where: clcategoriaWhereUniqueInput
  }

  /**
   * clcategoria updateMany
   */
  export type clcategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clcategorias.
     */
    data: XOR<clcategoriaUpdateManyMutationInput, clcategoriaUncheckedUpdateManyInput>
    /**
     * Filter which clcategorias to update
     */
    where?: clcategoriaWhereInput
    /**
     * Limit how many clcategorias to update.
     */
    limit?: number
  }

  /**
   * clcategoria upsert
   */
  export type clcategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clcategoria
     */
    select?: clcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clcategoria
     */
    omit?: clcategoriaOmit<ExtArgs> | null
    /**
     * The filter to search for the clcategoria to update in case it exists.
     */
    where: clcategoriaWhereUniqueInput
    /**
     * In case the clcategoria found by the `where` argument doesn't exist, create a new clcategoria with this data.
     */
    create: XOR<clcategoriaCreateInput, clcategoriaUncheckedCreateInput>
    /**
     * In case the clcategoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clcategoriaUpdateInput, clcategoriaUncheckedUpdateInput>
  }

  /**
   * clcategoria delete
   */
  export type clcategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clcategoria
     */
    select?: clcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clcategoria
     */
    omit?: clcategoriaOmit<ExtArgs> | null
    /**
     * Filter which clcategoria to delete.
     */
    where: clcategoriaWhereUniqueInput
  }

  /**
   * clcategoria deleteMany
   */
  export type clcategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clcategorias to delete
     */
    where?: clcategoriaWhereInput
    /**
     * Limit how many clcategorias to delete.
     */
    limit?: number
  }

  /**
   * clcategoria without action
   */
  export type clcategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clcategoria
     */
    select?: clcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clcategoria
     */
    omit?: clcategoriaOmit<ExtArgs> | null
  }


  /**
   * Model cltransporte
   */

  export type AggregateCltransporte = {
    _count: CltransporteCountAggregateOutputType | null
    _min: CltransporteMinAggregateOutputType | null
    _max: CltransporteMaxAggregateOutputType | null
  }

  export type CltransporteMinAggregateOutputType = {
    codtran: string | null
    trandes: string | null
    chofer: string | null
  }

  export type CltransporteMaxAggregateOutputType = {
    codtran: string | null
    trandes: string | null
    chofer: string | null
  }

  export type CltransporteCountAggregateOutputType = {
    codtran: number
    trandes: number
    chofer: number
    _all: number
  }


  export type CltransporteMinAggregateInputType = {
    codtran?: true
    trandes?: true
    chofer?: true
  }

  export type CltransporteMaxAggregateInputType = {
    codtran?: true
    trandes?: true
    chofer?: true
  }

  export type CltransporteCountAggregateInputType = {
    codtran?: true
    trandes?: true
    chofer?: true
    _all?: true
  }

  export type CltransporteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cltransporte to aggregate.
     */
    where?: cltransporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cltransportes to fetch.
     */
    orderBy?: cltransporteOrderByWithRelationInput | cltransporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cltransporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cltransportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cltransportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cltransportes
    **/
    _count?: true | CltransporteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CltransporteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CltransporteMaxAggregateInputType
  }

  export type GetCltransporteAggregateType<T extends CltransporteAggregateArgs> = {
        [P in keyof T & keyof AggregateCltransporte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCltransporte[P]>
      : GetScalarType<T[P], AggregateCltransporte[P]>
  }




  export type cltransporteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cltransporteWhereInput
    orderBy?: cltransporteOrderByWithAggregationInput | cltransporteOrderByWithAggregationInput[]
    by: CltransporteScalarFieldEnum[] | CltransporteScalarFieldEnum
    having?: cltransporteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CltransporteCountAggregateInputType | true
    _min?: CltransporteMinAggregateInputType
    _max?: CltransporteMaxAggregateInputType
  }

  export type CltransporteGroupByOutputType = {
    codtran: string
    trandes: string
    chofer: string | null
    _count: CltransporteCountAggregateOutputType | null
    _min: CltransporteMinAggregateOutputType | null
    _max: CltransporteMaxAggregateOutputType | null
  }

  type GetCltransporteGroupByPayload<T extends cltransporteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CltransporteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CltransporteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CltransporteGroupByOutputType[P]>
            : GetScalarType<T[P], CltransporteGroupByOutputType[P]>
        }
      >
    >


  export type cltransporteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codtran?: boolean
    trandes?: boolean
    chofer?: boolean
  }, ExtArgs["result"]["cltransporte"]>



  export type cltransporteSelectScalar = {
    codtran?: boolean
    trandes?: boolean
    chofer?: boolean
  }

  export type cltransporteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codtran" | "trandes" | "chofer", ExtArgs["result"]["cltransporte"]>

  export type $cltransportePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cltransporte"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      codtran: string
      trandes: string
      chofer: string | null
    }, ExtArgs["result"]["cltransporte"]>
    composites: {}
  }

  type cltransporteGetPayload<S extends boolean | null | undefined | cltransporteDefaultArgs> = $Result.GetResult<Prisma.$cltransportePayload, S>

  type cltransporteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cltransporteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CltransporteCountAggregateInputType | true
    }

  export interface cltransporteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cltransporte'], meta: { name: 'cltransporte' } }
    /**
     * Find zero or one Cltransporte that matches the filter.
     * @param {cltransporteFindUniqueArgs} args - Arguments to find a Cltransporte
     * @example
     * // Get one Cltransporte
     * const cltransporte = await prisma.cltransporte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cltransporteFindUniqueArgs>(args: SelectSubset<T, cltransporteFindUniqueArgs<ExtArgs>>): Prisma__cltransporteClient<$Result.GetResult<Prisma.$cltransportePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cltransporte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cltransporteFindUniqueOrThrowArgs} args - Arguments to find a Cltransporte
     * @example
     * // Get one Cltransporte
     * const cltransporte = await prisma.cltransporte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cltransporteFindUniqueOrThrowArgs>(args: SelectSubset<T, cltransporteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cltransporteClient<$Result.GetResult<Prisma.$cltransportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cltransporte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cltransporteFindFirstArgs} args - Arguments to find a Cltransporte
     * @example
     * // Get one Cltransporte
     * const cltransporte = await prisma.cltransporte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cltransporteFindFirstArgs>(args?: SelectSubset<T, cltransporteFindFirstArgs<ExtArgs>>): Prisma__cltransporteClient<$Result.GetResult<Prisma.$cltransportePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cltransporte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cltransporteFindFirstOrThrowArgs} args - Arguments to find a Cltransporte
     * @example
     * // Get one Cltransporte
     * const cltransporte = await prisma.cltransporte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cltransporteFindFirstOrThrowArgs>(args?: SelectSubset<T, cltransporteFindFirstOrThrowArgs<ExtArgs>>): Prisma__cltransporteClient<$Result.GetResult<Prisma.$cltransportePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cltransportes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cltransporteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cltransportes
     * const cltransportes = await prisma.cltransporte.findMany()
     * 
     * // Get first 10 Cltransportes
     * const cltransportes = await prisma.cltransporte.findMany({ take: 10 })
     * 
     * // Only select the `codtran`
     * const cltransporteWithCodtranOnly = await prisma.cltransporte.findMany({ select: { codtran: true } })
     * 
     */
    findMany<T extends cltransporteFindManyArgs>(args?: SelectSubset<T, cltransporteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cltransportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cltransporte.
     * @param {cltransporteCreateArgs} args - Arguments to create a Cltransporte.
     * @example
     * // Create one Cltransporte
     * const Cltransporte = await prisma.cltransporte.create({
     *   data: {
     *     // ... data to create a Cltransporte
     *   }
     * })
     * 
     */
    create<T extends cltransporteCreateArgs>(args: SelectSubset<T, cltransporteCreateArgs<ExtArgs>>): Prisma__cltransporteClient<$Result.GetResult<Prisma.$cltransportePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cltransportes.
     * @param {cltransporteCreateManyArgs} args - Arguments to create many Cltransportes.
     * @example
     * // Create many Cltransportes
     * const cltransporte = await prisma.cltransporte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cltransporteCreateManyArgs>(args?: SelectSubset<T, cltransporteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cltransporte.
     * @param {cltransporteDeleteArgs} args - Arguments to delete one Cltransporte.
     * @example
     * // Delete one Cltransporte
     * const Cltransporte = await prisma.cltransporte.delete({
     *   where: {
     *     // ... filter to delete one Cltransporte
     *   }
     * })
     * 
     */
    delete<T extends cltransporteDeleteArgs>(args: SelectSubset<T, cltransporteDeleteArgs<ExtArgs>>): Prisma__cltransporteClient<$Result.GetResult<Prisma.$cltransportePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cltransporte.
     * @param {cltransporteUpdateArgs} args - Arguments to update one Cltransporte.
     * @example
     * // Update one Cltransporte
     * const cltransporte = await prisma.cltransporte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cltransporteUpdateArgs>(args: SelectSubset<T, cltransporteUpdateArgs<ExtArgs>>): Prisma__cltransporteClient<$Result.GetResult<Prisma.$cltransportePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cltransportes.
     * @param {cltransporteDeleteManyArgs} args - Arguments to filter Cltransportes to delete.
     * @example
     * // Delete a few Cltransportes
     * const { count } = await prisma.cltransporte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cltransporteDeleteManyArgs>(args?: SelectSubset<T, cltransporteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cltransportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cltransporteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cltransportes
     * const cltransporte = await prisma.cltransporte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cltransporteUpdateManyArgs>(args: SelectSubset<T, cltransporteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cltransporte.
     * @param {cltransporteUpsertArgs} args - Arguments to update or create a Cltransporte.
     * @example
     * // Update or create a Cltransporte
     * const cltransporte = await prisma.cltransporte.upsert({
     *   create: {
     *     // ... data to create a Cltransporte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cltransporte we want to update
     *   }
     * })
     */
    upsert<T extends cltransporteUpsertArgs>(args: SelectSubset<T, cltransporteUpsertArgs<ExtArgs>>): Prisma__cltransporteClient<$Result.GetResult<Prisma.$cltransportePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cltransportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cltransporteCountArgs} args - Arguments to filter Cltransportes to count.
     * @example
     * // Count the number of Cltransportes
     * const count = await prisma.cltransporte.count({
     *   where: {
     *     // ... the filter for the Cltransportes we want to count
     *   }
     * })
    **/
    count<T extends cltransporteCountArgs>(
      args?: Subset<T, cltransporteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CltransporteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cltransporte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CltransporteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CltransporteAggregateArgs>(args: Subset<T, CltransporteAggregateArgs>): Prisma.PrismaPromise<GetCltransporteAggregateType<T>>

    /**
     * Group by Cltransporte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cltransporteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cltransporteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cltransporteGroupByArgs['orderBy'] }
        : { orderBy?: cltransporteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cltransporteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCltransporteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cltransporte model
   */
  readonly fields: cltransporteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cltransporte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cltransporteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cltransporte model
   */
  interface cltransporteFieldRefs {
    readonly codtran: FieldRef<"cltransporte", 'String'>
    readonly trandes: FieldRef<"cltransporte", 'String'>
    readonly chofer: FieldRef<"cltransporte", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cltransporte findUnique
   */
  export type cltransporteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cltransporte
     */
    select?: cltransporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cltransporte
     */
    omit?: cltransporteOmit<ExtArgs> | null
    /**
     * Filter, which cltransporte to fetch.
     */
    where: cltransporteWhereUniqueInput
  }

  /**
   * cltransporte findUniqueOrThrow
   */
  export type cltransporteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cltransporte
     */
    select?: cltransporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cltransporte
     */
    omit?: cltransporteOmit<ExtArgs> | null
    /**
     * Filter, which cltransporte to fetch.
     */
    where: cltransporteWhereUniqueInput
  }

  /**
   * cltransporte findFirst
   */
  export type cltransporteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cltransporte
     */
    select?: cltransporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cltransporte
     */
    omit?: cltransporteOmit<ExtArgs> | null
    /**
     * Filter, which cltransporte to fetch.
     */
    where?: cltransporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cltransportes to fetch.
     */
    orderBy?: cltransporteOrderByWithRelationInput | cltransporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cltransportes.
     */
    cursor?: cltransporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cltransportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cltransportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cltransportes.
     */
    distinct?: CltransporteScalarFieldEnum | CltransporteScalarFieldEnum[]
  }

  /**
   * cltransporte findFirstOrThrow
   */
  export type cltransporteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cltransporte
     */
    select?: cltransporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cltransporte
     */
    omit?: cltransporteOmit<ExtArgs> | null
    /**
     * Filter, which cltransporte to fetch.
     */
    where?: cltransporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cltransportes to fetch.
     */
    orderBy?: cltransporteOrderByWithRelationInput | cltransporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cltransportes.
     */
    cursor?: cltransporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cltransportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cltransportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cltransportes.
     */
    distinct?: CltransporteScalarFieldEnum | CltransporteScalarFieldEnum[]
  }

  /**
   * cltransporte findMany
   */
  export type cltransporteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cltransporte
     */
    select?: cltransporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cltransporte
     */
    omit?: cltransporteOmit<ExtArgs> | null
    /**
     * Filter, which cltransportes to fetch.
     */
    where?: cltransporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cltransportes to fetch.
     */
    orderBy?: cltransporteOrderByWithRelationInput | cltransporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cltransportes.
     */
    cursor?: cltransporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cltransportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cltransportes.
     */
    skip?: number
    distinct?: CltransporteScalarFieldEnum | CltransporteScalarFieldEnum[]
  }

  /**
   * cltransporte create
   */
  export type cltransporteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cltransporte
     */
    select?: cltransporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cltransporte
     */
    omit?: cltransporteOmit<ExtArgs> | null
    /**
     * The data needed to create a cltransporte.
     */
    data: XOR<cltransporteCreateInput, cltransporteUncheckedCreateInput>
  }

  /**
   * cltransporte createMany
   */
  export type cltransporteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cltransportes.
     */
    data: cltransporteCreateManyInput | cltransporteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cltransporte update
   */
  export type cltransporteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cltransporte
     */
    select?: cltransporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cltransporte
     */
    omit?: cltransporteOmit<ExtArgs> | null
    /**
     * The data needed to update a cltransporte.
     */
    data: XOR<cltransporteUpdateInput, cltransporteUncheckedUpdateInput>
    /**
     * Choose, which cltransporte to update.
     */
    where: cltransporteWhereUniqueInput
  }

  /**
   * cltransporte updateMany
   */
  export type cltransporteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cltransportes.
     */
    data: XOR<cltransporteUpdateManyMutationInput, cltransporteUncheckedUpdateManyInput>
    /**
     * Filter which cltransportes to update
     */
    where?: cltransporteWhereInput
    /**
     * Limit how many cltransportes to update.
     */
    limit?: number
  }

  /**
   * cltransporte upsert
   */
  export type cltransporteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cltransporte
     */
    select?: cltransporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cltransporte
     */
    omit?: cltransporteOmit<ExtArgs> | null
    /**
     * The filter to search for the cltransporte to update in case it exists.
     */
    where: cltransporteWhereUniqueInput
    /**
     * In case the cltransporte found by the `where` argument doesn't exist, create a new cltransporte with this data.
     */
    create: XOR<cltransporteCreateInput, cltransporteUncheckedCreateInput>
    /**
     * In case the cltransporte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cltransporteUpdateInput, cltransporteUncheckedUpdateInput>
  }

  /**
   * cltransporte delete
   */
  export type cltransporteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cltransporte
     */
    select?: cltransporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cltransporte
     */
    omit?: cltransporteOmit<ExtArgs> | null
    /**
     * Filter which cltransporte to delete.
     */
    where: cltransporteWhereUniqueInput
  }

  /**
   * cltransporte deleteMany
   */
  export type cltransporteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cltransportes to delete
     */
    where?: cltransporteWhereInput
    /**
     * Limit how many cltransportes to delete.
     */
    limit?: number
  }

  /**
   * cltransporte without action
   */
  export type cltransporteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cltransporte
     */
    select?: cltransporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cltransporte
     */
    omit?: cltransporteOmit<ExtArgs> | null
  }


  /**
   * Model clzonas
   */

  export type AggregateClzonas = {
    _count: ClzonasCountAggregateOutputType | null
    _min: ClzonasMinAggregateOutputType | null
    _max: ClzonasMaxAggregateOutputType | null
  }

  export type ClzonasMinAggregateOutputType = {
    codzon: string | null
    zondes: string | null
  }

  export type ClzonasMaxAggregateOutputType = {
    codzon: string | null
    zondes: string | null
  }

  export type ClzonasCountAggregateOutputType = {
    codzon: number
    zondes: number
    _all: number
  }


  export type ClzonasMinAggregateInputType = {
    codzon?: true
    zondes?: true
  }

  export type ClzonasMaxAggregateInputType = {
    codzon?: true
    zondes?: true
  }

  export type ClzonasCountAggregateInputType = {
    codzon?: true
    zondes?: true
    _all?: true
  }

  export type ClzonasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clzonas to aggregate.
     */
    where?: clzonasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clzonas to fetch.
     */
    orderBy?: clzonasOrderByWithRelationInput | clzonasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clzonasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clzonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clzonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clzonas
    **/
    _count?: true | ClzonasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClzonasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClzonasMaxAggregateInputType
  }

  export type GetClzonasAggregateType<T extends ClzonasAggregateArgs> = {
        [P in keyof T & keyof AggregateClzonas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClzonas[P]>
      : GetScalarType<T[P], AggregateClzonas[P]>
  }




  export type clzonasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clzonasWhereInput
    orderBy?: clzonasOrderByWithAggregationInput | clzonasOrderByWithAggregationInput[]
    by: ClzonasScalarFieldEnum[] | ClzonasScalarFieldEnum
    having?: clzonasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClzonasCountAggregateInputType | true
    _min?: ClzonasMinAggregateInputType
    _max?: ClzonasMaxAggregateInputType
  }

  export type ClzonasGroupByOutputType = {
    codzon: string
    zondes: string
    _count: ClzonasCountAggregateOutputType | null
    _min: ClzonasMinAggregateOutputType | null
    _max: ClzonasMaxAggregateOutputType | null
  }

  type GetClzonasGroupByPayload<T extends clzonasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClzonasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClzonasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClzonasGroupByOutputType[P]>
            : GetScalarType<T[P], ClzonasGroupByOutputType[P]>
        }
      >
    >


  export type clzonasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codzon?: boolean
    zondes?: boolean
  }, ExtArgs["result"]["clzonas"]>



  export type clzonasSelectScalar = {
    codzon?: boolean
    zondes?: boolean
  }

  export type clzonasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codzon" | "zondes", ExtArgs["result"]["clzonas"]>

  export type $clzonasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clzonas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      codzon: string
      zondes: string
    }, ExtArgs["result"]["clzonas"]>
    composites: {}
  }

  type clzonasGetPayload<S extends boolean | null | undefined | clzonasDefaultArgs> = $Result.GetResult<Prisma.$clzonasPayload, S>

  type clzonasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clzonasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClzonasCountAggregateInputType | true
    }

  export interface clzonasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clzonas'], meta: { name: 'clzonas' } }
    /**
     * Find zero or one Clzonas that matches the filter.
     * @param {clzonasFindUniqueArgs} args - Arguments to find a Clzonas
     * @example
     * // Get one Clzonas
     * const clzonas = await prisma.clzonas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clzonasFindUniqueArgs>(args: SelectSubset<T, clzonasFindUniqueArgs<ExtArgs>>): Prisma__clzonasClient<$Result.GetResult<Prisma.$clzonasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clzonas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clzonasFindUniqueOrThrowArgs} args - Arguments to find a Clzonas
     * @example
     * // Get one Clzonas
     * const clzonas = await prisma.clzonas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clzonasFindUniqueOrThrowArgs>(args: SelectSubset<T, clzonasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clzonasClient<$Result.GetResult<Prisma.$clzonasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clzonas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clzonasFindFirstArgs} args - Arguments to find a Clzonas
     * @example
     * // Get one Clzonas
     * const clzonas = await prisma.clzonas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clzonasFindFirstArgs>(args?: SelectSubset<T, clzonasFindFirstArgs<ExtArgs>>): Prisma__clzonasClient<$Result.GetResult<Prisma.$clzonasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clzonas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clzonasFindFirstOrThrowArgs} args - Arguments to find a Clzonas
     * @example
     * // Get one Clzonas
     * const clzonas = await prisma.clzonas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clzonasFindFirstOrThrowArgs>(args?: SelectSubset<T, clzonasFindFirstOrThrowArgs<ExtArgs>>): Prisma__clzonasClient<$Result.GetResult<Prisma.$clzonasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clzonas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clzonasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clzonas
     * const clzonas = await prisma.clzonas.findMany()
     * 
     * // Get first 10 Clzonas
     * const clzonas = await prisma.clzonas.findMany({ take: 10 })
     * 
     * // Only select the `codzon`
     * const clzonasWithCodzonOnly = await prisma.clzonas.findMany({ select: { codzon: true } })
     * 
     */
    findMany<T extends clzonasFindManyArgs>(args?: SelectSubset<T, clzonasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clzonasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clzonas.
     * @param {clzonasCreateArgs} args - Arguments to create a Clzonas.
     * @example
     * // Create one Clzonas
     * const Clzonas = await prisma.clzonas.create({
     *   data: {
     *     // ... data to create a Clzonas
     *   }
     * })
     * 
     */
    create<T extends clzonasCreateArgs>(args: SelectSubset<T, clzonasCreateArgs<ExtArgs>>): Prisma__clzonasClient<$Result.GetResult<Prisma.$clzonasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clzonas.
     * @param {clzonasCreateManyArgs} args - Arguments to create many Clzonas.
     * @example
     * // Create many Clzonas
     * const clzonas = await prisma.clzonas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clzonasCreateManyArgs>(args?: SelectSubset<T, clzonasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clzonas.
     * @param {clzonasDeleteArgs} args - Arguments to delete one Clzonas.
     * @example
     * // Delete one Clzonas
     * const Clzonas = await prisma.clzonas.delete({
     *   where: {
     *     // ... filter to delete one Clzonas
     *   }
     * })
     * 
     */
    delete<T extends clzonasDeleteArgs>(args: SelectSubset<T, clzonasDeleteArgs<ExtArgs>>): Prisma__clzonasClient<$Result.GetResult<Prisma.$clzonasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clzonas.
     * @param {clzonasUpdateArgs} args - Arguments to update one Clzonas.
     * @example
     * // Update one Clzonas
     * const clzonas = await prisma.clzonas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clzonasUpdateArgs>(args: SelectSubset<T, clzonasUpdateArgs<ExtArgs>>): Prisma__clzonasClient<$Result.GetResult<Prisma.$clzonasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clzonas.
     * @param {clzonasDeleteManyArgs} args - Arguments to filter Clzonas to delete.
     * @example
     * // Delete a few Clzonas
     * const { count } = await prisma.clzonas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clzonasDeleteManyArgs>(args?: SelectSubset<T, clzonasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clzonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clzonasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clzonas
     * const clzonas = await prisma.clzonas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clzonasUpdateManyArgs>(args: SelectSubset<T, clzonasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clzonas.
     * @param {clzonasUpsertArgs} args - Arguments to update or create a Clzonas.
     * @example
     * // Update or create a Clzonas
     * const clzonas = await prisma.clzonas.upsert({
     *   create: {
     *     // ... data to create a Clzonas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clzonas we want to update
     *   }
     * })
     */
    upsert<T extends clzonasUpsertArgs>(args: SelectSubset<T, clzonasUpsertArgs<ExtArgs>>): Prisma__clzonasClient<$Result.GetResult<Prisma.$clzonasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clzonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clzonasCountArgs} args - Arguments to filter Clzonas to count.
     * @example
     * // Count the number of Clzonas
     * const count = await prisma.clzonas.count({
     *   where: {
     *     // ... the filter for the Clzonas we want to count
     *   }
     * })
    **/
    count<T extends clzonasCountArgs>(
      args?: Subset<T, clzonasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClzonasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clzonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClzonasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClzonasAggregateArgs>(args: Subset<T, ClzonasAggregateArgs>): Prisma.PrismaPromise<GetClzonasAggregateType<T>>

    /**
     * Group by Clzonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clzonasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clzonasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clzonasGroupByArgs['orderBy'] }
        : { orderBy?: clzonasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clzonasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClzonasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clzonas model
   */
  readonly fields: clzonasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clzonas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clzonasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clzonas model
   */
  interface clzonasFieldRefs {
    readonly codzon: FieldRef<"clzonas", 'String'>
    readonly zondes: FieldRef<"clzonas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * clzonas findUnique
   */
  export type clzonasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clzonas
     */
    select?: clzonasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clzonas
     */
    omit?: clzonasOmit<ExtArgs> | null
    /**
     * Filter, which clzonas to fetch.
     */
    where: clzonasWhereUniqueInput
  }

  /**
   * clzonas findUniqueOrThrow
   */
  export type clzonasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clzonas
     */
    select?: clzonasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clzonas
     */
    omit?: clzonasOmit<ExtArgs> | null
    /**
     * Filter, which clzonas to fetch.
     */
    where: clzonasWhereUniqueInput
  }

  /**
   * clzonas findFirst
   */
  export type clzonasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clzonas
     */
    select?: clzonasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clzonas
     */
    omit?: clzonasOmit<ExtArgs> | null
    /**
     * Filter, which clzonas to fetch.
     */
    where?: clzonasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clzonas to fetch.
     */
    orderBy?: clzonasOrderByWithRelationInput | clzonasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clzonas.
     */
    cursor?: clzonasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clzonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clzonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clzonas.
     */
    distinct?: ClzonasScalarFieldEnum | ClzonasScalarFieldEnum[]
  }

  /**
   * clzonas findFirstOrThrow
   */
  export type clzonasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clzonas
     */
    select?: clzonasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clzonas
     */
    omit?: clzonasOmit<ExtArgs> | null
    /**
     * Filter, which clzonas to fetch.
     */
    where?: clzonasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clzonas to fetch.
     */
    orderBy?: clzonasOrderByWithRelationInput | clzonasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clzonas.
     */
    cursor?: clzonasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clzonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clzonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clzonas.
     */
    distinct?: ClzonasScalarFieldEnum | ClzonasScalarFieldEnum[]
  }

  /**
   * clzonas findMany
   */
  export type clzonasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clzonas
     */
    select?: clzonasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clzonas
     */
    omit?: clzonasOmit<ExtArgs> | null
    /**
     * Filter, which clzonas to fetch.
     */
    where?: clzonasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clzonas to fetch.
     */
    orderBy?: clzonasOrderByWithRelationInput | clzonasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clzonas.
     */
    cursor?: clzonasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clzonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clzonas.
     */
    skip?: number
    distinct?: ClzonasScalarFieldEnum | ClzonasScalarFieldEnum[]
  }

  /**
   * clzonas create
   */
  export type clzonasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clzonas
     */
    select?: clzonasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clzonas
     */
    omit?: clzonasOmit<ExtArgs> | null
    /**
     * The data needed to create a clzonas.
     */
    data: XOR<clzonasCreateInput, clzonasUncheckedCreateInput>
  }

  /**
   * clzonas createMany
   */
  export type clzonasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clzonas.
     */
    data: clzonasCreateManyInput | clzonasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clzonas update
   */
  export type clzonasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clzonas
     */
    select?: clzonasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clzonas
     */
    omit?: clzonasOmit<ExtArgs> | null
    /**
     * The data needed to update a clzonas.
     */
    data: XOR<clzonasUpdateInput, clzonasUncheckedUpdateInput>
    /**
     * Choose, which clzonas to update.
     */
    where: clzonasWhereUniqueInput
  }

  /**
   * clzonas updateMany
   */
  export type clzonasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clzonas.
     */
    data: XOR<clzonasUpdateManyMutationInput, clzonasUncheckedUpdateManyInput>
    /**
     * Filter which clzonas to update
     */
    where?: clzonasWhereInput
    /**
     * Limit how many clzonas to update.
     */
    limit?: number
  }

  /**
   * clzonas upsert
   */
  export type clzonasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clzonas
     */
    select?: clzonasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clzonas
     */
    omit?: clzonasOmit<ExtArgs> | null
    /**
     * The filter to search for the clzonas to update in case it exists.
     */
    where: clzonasWhereUniqueInput
    /**
     * In case the clzonas found by the `where` argument doesn't exist, create a new clzonas with this data.
     */
    create: XOR<clzonasCreateInput, clzonasUncheckedCreateInput>
    /**
     * In case the clzonas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clzonasUpdateInput, clzonasUncheckedUpdateInput>
  }

  /**
   * clzonas delete
   */
  export type clzonasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clzonas
     */
    select?: clzonasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clzonas
     */
    omit?: clzonasOmit<ExtArgs> | null
    /**
     * Filter which clzonas to delete.
     */
    where: clzonasWhereUniqueInput
  }

  /**
   * clzonas deleteMany
   */
  export type clzonasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clzonas to delete
     */
    where?: clzonasWhereInput
    /**
     * Limit how many clzonas to delete.
     */
    limit?: number
  }

  /**
   * clzonas without action
   */
  export type clzonasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clzonas
     */
    select?: clzonasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clzonas
     */
    omit?: clzonasOmit<ExtArgs> | null
  }


  /**
   * Model dtdevolucion
   */

  export type AggregateDtdevolucion = {
    _count: DtdevolucionCountAggregateOutputType | null
    _avg: DtdevolucionAvgAggregateOutputType | null
    _sum: DtdevolucionSumAggregateOutputType | null
    _min: DtdevolucionMinAggregateOutputType | null
    _max: DtdevolucionMaxAggregateOutputType | null
  }

  export type DtdevolucionAvgAggregateOutputType = {
    devnum: number | null
    saldo: Decimal | null
  }

  export type DtdevolucionSumAggregateOutputType = {
    devnum: number | null
    saldo: Decimal | null
  }

  export type DtdevolucionMinAggregateOutputType = {
    devnum: number | null
    estatus: string | null
    comentario: string | null
    descrip: string | null
    saldo: Decimal | null
    fecemis: Date | null
    fecvenc: Date | null
    codcli: string | null
    codven: string | null
    codtran: string | null
  }

  export type DtdevolucionMaxAggregateOutputType = {
    devnum: number | null
    estatus: string | null
    comentario: string | null
    descrip: string | null
    saldo: Decimal | null
    fecemis: Date | null
    fecvenc: Date | null
    codcli: string | null
    codven: string | null
    codtran: string | null
  }

  export type DtdevolucionCountAggregateOutputType = {
    devnum: number
    estatus: number
    comentario: number
    descrip: number
    saldo: number
    fecemis: number
    fecvenc: number
    codcli: number
    codven: number
    codtran: number
    _all: number
  }


  export type DtdevolucionAvgAggregateInputType = {
    devnum?: true
    saldo?: true
  }

  export type DtdevolucionSumAggregateInputType = {
    devnum?: true
    saldo?: true
  }

  export type DtdevolucionMinAggregateInputType = {
    devnum?: true
    estatus?: true
    comentario?: true
    descrip?: true
    saldo?: true
    fecemis?: true
    fecvenc?: true
    codcli?: true
    codven?: true
    codtran?: true
  }

  export type DtdevolucionMaxAggregateInputType = {
    devnum?: true
    estatus?: true
    comentario?: true
    descrip?: true
    saldo?: true
    fecemis?: true
    fecvenc?: true
    codcli?: true
    codven?: true
    codtran?: true
  }

  export type DtdevolucionCountAggregateInputType = {
    devnum?: true
    estatus?: true
    comentario?: true
    descrip?: true
    saldo?: true
    fecemis?: true
    fecvenc?: true
    codcli?: true
    codven?: true
    codtran?: true
    _all?: true
  }

  export type DtdevolucionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dtdevolucion to aggregate.
     */
    where?: dtdevolucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dtdevolucions to fetch.
     */
    orderBy?: dtdevolucionOrderByWithRelationInput | dtdevolucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dtdevolucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dtdevolucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dtdevolucions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dtdevolucions
    **/
    _count?: true | DtdevolucionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DtdevolucionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DtdevolucionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DtdevolucionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DtdevolucionMaxAggregateInputType
  }

  export type GetDtdevolucionAggregateType<T extends DtdevolucionAggregateArgs> = {
        [P in keyof T & keyof AggregateDtdevolucion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDtdevolucion[P]>
      : GetScalarType<T[P], AggregateDtdevolucion[P]>
  }




  export type dtdevolucionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dtdevolucionWhereInput
    orderBy?: dtdevolucionOrderByWithAggregationInput | dtdevolucionOrderByWithAggregationInput[]
    by: DtdevolucionScalarFieldEnum[] | DtdevolucionScalarFieldEnum
    having?: dtdevolucionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DtdevolucionCountAggregateInputType | true
    _avg?: DtdevolucionAvgAggregateInputType
    _sum?: DtdevolucionSumAggregateInputType
    _min?: DtdevolucionMinAggregateInputType
    _max?: DtdevolucionMaxAggregateInputType
  }

  export type DtdevolucionGroupByOutputType = {
    devnum: number
    estatus: string
    comentario: string | null
    descrip: string
    saldo: Decimal
    fecemis: Date
    fecvenc: Date
    codcli: string
    codven: string
    codtran: string
    _count: DtdevolucionCountAggregateOutputType | null
    _avg: DtdevolucionAvgAggregateOutputType | null
    _sum: DtdevolucionSumAggregateOutputType | null
    _min: DtdevolucionMinAggregateOutputType | null
    _max: DtdevolucionMaxAggregateOutputType | null
  }

  type GetDtdevolucionGroupByPayload<T extends dtdevolucionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DtdevolucionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DtdevolucionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DtdevolucionGroupByOutputType[P]>
            : GetScalarType<T[P], DtdevolucionGroupByOutputType[P]>
        }
      >
    >


  export type dtdevolucionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    devnum?: boolean
    estatus?: boolean
    comentario?: boolean
    descrip?: boolean
    saldo?: boolean
    fecemis?: boolean
    fecvenc?: boolean
    codcli?: boolean
    codven?: boolean
    codtran?: boolean
  }, ExtArgs["result"]["dtdevolucion"]>



  export type dtdevolucionSelectScalar = {
    devnum?: boolean
    estatus?: boolean
    comentario?: boolean
    descrip?: boolean
    saldo?: boolean
    fecemis?: boolean
    fecvenc?: boolean
    codcli?: boolean
    codven?: boolean
    codtran?: boolean
  }

  export type dtdevolucionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"devnum" | "estatus" | "comentario" | "descrip" | "saldo" | "fecemis" | "fecvenc" | "codcli" | "codven" | "codtran", ExtArgs["result"]["dtdevolucion"]>

  export type $dtdevolucionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dtdevolucion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      devnum: number
      estatus: string
      comentario: string | null
      descrip: string
      saldo: Prisma.Decimal
      fecemis: Date
      fecvenc: Date
      codcli: string
      codven: string
      codtran: string
    }, ExtArgs["result"]["dtdevolucion"]>
    composites: {}
  }

  type dtdevolucionGetPayload<S extends boolean | null | undefined | dtdevolucionDefaultArgs> = $Result.GetResult<Prisma.$dtdevolucionPayload, S>

  type dtdevolucionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dtdevolucionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DtdevolucionCountAggregateInputType | true
    }

  export interface dtdevolucionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dtdevolucion'], meta: { name: 'dtdevolucion' } }
    /**
     * Find zero or one Dtdevolucion that matches the filter.
     * @param {dtdevolucionFindUniqueArgs} args - Arguments to find a Dtdevolucion
     * @example
     * // Get one Dtdevolucion
     * const dtdevolucion = await prisma.dtdevolucion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dtdevolucionFindUniqueArgs>(args: SelectSubset<T, dtdevolucionFindUniqueArgs<ExtArgs>>): Prisma__dtdevolucionClient<$Result.GetResult<Prisma.$dtdevolucionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dtdevolucion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dtdevolucionFindUniqueOrThrowArgs} args - Arguments to find a Dtdevolucion
     * @example
     * // Get one Dtdevolucion
     * const dtdevolucion = await prisma.dtdevolucion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dtdevolucionFindUniqueOrThrowArgs>(args: SelectSubset<T, dtdevolucionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dtdevolucionClient<$Result.GetResult<Prisma.$dtdevolucionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dtdevolucion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dtdevolucionFindFirstArgs} args - Arguments to find a Dtdevolucion
     * @example
     * // Get one Dtdevolucion
     * const dtdevolucion = await prisma.dtdevolucion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dtdevolucionFindFirstArgs>(args?: SelectSubset<T, dtdevolucionFindFirstArgs<ExtArgs>>): Prisma__dtdevolucionClient<$Result.GetResult<Prisma.$dtdevolucionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dtdevolucion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dtdevolucionFindFirstOrThrowArgs} args - Arguments to find a Dtdevolucion
     * @example
     * // Get one Dtdevolucion
     * const dtdevolucion = await prisma.dtdevolucion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dtdevolucionFindFirstOrThrowArgs>(args?: SelectSubset<T, dtdevolucionFindFirstOrThrowArgs<ExtArgs>>): Prisma__dtdevolucionClient<$Result.GetResult<Prisma.$dtdevolucionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dtdevolucions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dtdevolucionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dtdevolucions
     * const dtdevolucions = await prisma.dtdevolucion.findMany()
     * 
     * // Get first 10 Dtdevolucions
     * const dtdevolucions = await prisma.dtdevolucion.findMany({ take: 10 })
     * 
     * // Only select the `devnum`
     * const dtdevolucionWithDevnumOnly = await prisma.dtdevolucion.findMany({ select: { devnum: true } })
     * 
     */
    findMany<T extends dtdevolucionFindManyArgs>(args?: SelectSubset<T, dtdevolucionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dtdevolucionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dtdevolucion.
     * @param {dtdevolucionCreateArgs} args - Arguments to create a Dtdevolucion.
     * @example
     * // Create one Dtdevolucion
     * const Dtdevolucion = await prisma.dtdevolucion.create({
     *   data: {
     *     // ... data to create a Dtdevolucion
     *   }
     * })
     * 
     */
    create<T extends dtdevolucionCreateArgs>(args: SelectSubset<T, dtdevolucionCreateArgs<ExtArgs>>): Prisma__dtdevolucionClient<$Result.GetResult<Prisma.$dtdevolucionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dtdevolucions.
     * @param {dtdevolucionCreateManyArgs} args - Arguments to create many Dtdevolucions.
     * @example
     * // Create many Dtdevolucions
     * const dtdevolucion = await prisma.dtdevolucion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dtdevolucionCreateManyArgs>(args?: SelectSubset<T, dtdevolucionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dtdevolucion.
     * @param {dtdevolucionDeleteArgs} args - Arguments to delete one Dtdevolucion.
     * @example
     * // Delete one Dtdevolucion
     * const Dtdevolucion = await prisma.dtdevolucion.delete({
     *   where: {
     *     // ... filter to delete one Dtdevolucion
     *   }
     * })
     * 
     */
    delete<T extends dtdevolucionDeleteArgs>(args: SelectSubset<T, dtdevolucionDeleteArgs<ExtArgs>>): Prisma__dtdevolucionClient<$Result.GetResult<Prisma.$dtdevolucionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dtdevolucion.
     * @param {dtdevolucionUpdateArgs} args - Arguments to update one Dtdevolucion.
     * @example
     * // Update one Dtdevolucion
     * const dtdevolucion = await prisma.dtdevolucion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dtdevolucionUpdateArgs>(args: SelectSubset<T, dtdevolucionUpdateArgs<ExtArgs>>): Prisma__dtdevolucionClient<$Result.GetResult<Prisma.$dtdevolucionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dtdevolucions.
     * @param {dtdevolucionDeleteManyArgs} args - Arguments to filter Dtdevolucions to delete.
     * @example
     * // Delete a few Dtdevolucions
     * const { count } = await prisma.dtdevolucion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dtdevolucionDeleteManyArgs>(args?: SelectSubset<T, dtdevolucionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dtdevolucions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dtdevolucionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dtdevolucions
     * const dtdevolucion = await prisma.dtdevolucion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dtdevolucionUpdateManyArgs>(args: SelectSubset<T, dtdevolucionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dtdevolucion.
     * @param {dtdevolucionUpsertArgs} args - Arguments to update or create a Dtdevolucion.
     * @example
     * // Update or create a Dtdevolucion
     * const dtdevolucion = await prisma.dtdevolucion.upsert({
     *   create: {
     *     // ... data to create a Dtdevolucion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dtdevolucion we want to update
     *   }
     * })
     */
    upsert<T extends dtdevolucionUpsertArgs>(args: SelectSubset<T, dtdevolucionUpsertArgs<ExtArgs>>): Prisma__dtdevolucionClient<$Result.GetResult<Prisma.$dtdevolucionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dtdevolucions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dtdevolucionCountArgs} args - Arguments to filter Dtdevolucions to count.
     * @example
     * // Count the number of Dtdevolucions
     * const count = await prisma.dtdevolucion.count({
     *   where: {
     *     // ... the filter for the Dtdevolucions we want to count
     *   }
     * })
    **/
    count<T extends dtdevolucionCountArgs>(
      args?: Subset<T, dtdevolucionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DtdevolucionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dtdevolucion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtdevolucionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DtdevolucionAggregateArgs>(args: Subset<T, DtdevolucionAggregateArgs>): Prisma.PrismaPromise<GetDtdevolucionAggregateType<T>>

    /**
     * Group by Dtdevolucion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dtdevolucionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dtdevolucionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dtdevolucionGroupByArgs['orderBy'] }
        : { orderBy?: dtdevolucionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dtdevolucionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDtdevolucionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dtdevolucion model
   */
  readonly fields: dtdevolucionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dtdevolucion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dtdevolucionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dtdevolucion model
   */
  interface dtdevolucionFieldRefs {
    readonly devnum: FieldRef<"dtdevolucion", 'Int'>
    readonly estatus: FieldRef<"dtdevolucion", 'String'>
    readonly comentario: FieldRef<"dtdevolucion", 'String'>
    readonly descrip: FieldRef<"dtdevolucion", 'String'>
    readonly saldo: FieldRef<"dtdevolucion", 'Decimal'>
    readonly fecemis: FieldRef<"dtdevolucion", 'DateTime'>
    readonly fecvenc: FieldRef<"dtdevolucion", 'DateTime'>
    readonly codcli: FieldRef<"dtdevolucion", 'String'>
    readonly codven: FieldRef<"dtdevolucion", 'String'>
    readonly codtran: FieldRef<"dtdevolucion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dtdevolucion findUnique
   */
  export type dtdevolucionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevolucion
     */
    select?: dtdevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevolucion
     */
    omit?: dtdevolucionOmit<ExtArgs> | null
    /**
     * Filter, which dtdevolucion to fetch.
     */
    where: dtdevolucionWhereUniqueInput
  }

  /**
   * dtdevolucion findUniqueOrThrow
   */
  export type dtdevolucionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevolucion
     */
    select?: dtdevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevolucion
     */
    omit?: dtdevolucionOmit<ExtArgs> | null
    /**
     * Filter, which dtdevolucion to fetch.
     */
    where: dtdevolucionWhereUniqueInput
  }

  /**
   * dtdevolucion findFirst
   */
  export type dtdevolucionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevolucion
     */
    select?: dtdevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevolucion
     */
    omit?: dtdevolucionOmit<ExtArgs> | null
    /**
     * Filter, which dtdevolucion to fetch.
     */
    where?: dtdevolucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dtdevolucions to fetch.
     */
    orderBy?: dtdevolucionOrderByWithRelationInput | dtdevolucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dtdevolucions.
     */
    cursor?: dtdevolucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dtdevolucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dtdevolucions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dtdevolucions.
     */
    distinct?: DtdevolucionScalarFieldEnum | DtdevolucionScalarFieldEnum[]
  }

  /**
   * dtdevolucion findFirstOrThrow
   */
  export type dtdevolucionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevolucion
     */
    select?: dtdevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevolucion
     */
    omit?: dtdevolucionOmit<ExtArgs> | null
    /**
     * Filter, which dtdevolucion to fetch.
     */
    where?: dtdevolucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dtdevolucions to fetch.
     */
    orderBy?: dtdevolucionOrderByWithRelationInput | dtdevolucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dtdevolucions.
     */
    cursor?: dtdevolucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dtdevolucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dtdevolucions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dtdevolucions.
     */
    distinct?: DtdevolucionScalarFieldEnum | DtdevolucionScalarFieldEnum[]
  }

  /**
   * dtdevolucion findMany
   */
  export type dtdevolucionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevolucion
     */
    select?: dtdevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevolucion
     */
    omit?: dtdevolucionOmit<ExtArgs> | null
    /**
     * Filter, which dtdevolucions to fetch.
     */
    where?: dtdevolucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dtdevolucions to fetch.
     */
    orderBy?: dtdevolucionOrderByWithRelationInput | dtdevolucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dtdevolucions.
     */
    cursor?: dtdevolucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dtdevolucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dtdevolucions.
     */
    skip?: number
    distinct?: DtdevolucionScalarFieldEnum | DtdevolucionScalarFieldEnum[]
  }

  /**
   * dtdevolucion create
   */
  export type dtdevolucionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevolucion
     */
    select?: dtdevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevolucion
     */
    omit?: dtdevolucionOmit<ExtArgs> | null
    /**
     * The data needed to create a dtdevolucion.
     */
    data: XOR<dtdevolucionCreateInput, dtdevolucionUncheckedCreateInput>
  }

  /**
   * dtdevolucion createMany
   */
  export type dtdevolucionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dtdevolucions.
     */
    data: dtdevolucionCreateManyInput | dtdevolucionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dtdevolucion update
   */
  export type dtdevolucionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevolucion
     */
    select?: dtdevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevolucion
     */
    omit?: dtdevolucionOmit<ExtArgs> | null
    /**
     * The data needed to update a dtdevolucion.
     */
    data: XOR<dtdevolucionUpdateInput, dtdevolucionUncheckedUpdateInput>
    /**
     * Choose, which dtdevolucion to update.
     */
    where: dtdevolucionWhereUniqueInput
  }

  /**
   * dtdevolucion updateMany
   */
  export type dtdevolucionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dtdevolucions.
     */
    data: XOR<dtdevolucionUpdateManyMutationInput, dtdevolucionUncheckedUpdateManyInput>
    /**
     * Filter which dtdevolucions to update
     */
    where?: dtdevolucionWhereInput
    /**
     * Limit how many dtdevolucions to update.
     */
    limit?: number
  }

  /**
   * dtdevolucion upsert
   */
  export type dtdevolucionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevolucion
     */
    select?: dtdevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevolucion
     */
    omit?: dtdevolucionOmit<ExtArgs> | null
    /**
     * The filter to search for the dtdevolucion to update in case it exists.
     */
    where: dtdevolucionWhereUniqueInput
    /**
     * In case the dtdevolucion found by the `where` argument doesn't exist, create a new dtdevolucion with this data.
     */
    create: XOR<dtdevolucionCreateInput, dtdevolucionUncheckedCreateInput>
    /**
     * In case the dtdevolucion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dtdevolucionUpdateInput, dtdevolucionUncheckedUpdateInput>
  }

  /**
   * dtdevolucion delete
   */
  export type dtdevolucionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevolucion
     */
    select?: dtdevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevolucion
     */
    omit?: dtdevolucionOmit<ExtArgs> | null
    /**
     * Filter which dtdevolucion to delete.
     */
    where: dtdevolucionWhereUniqueInput
  }

  /**
   * dtdevolucion deleteMany
   */
  export type dtdevolucionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dtdevolucions to delete
     */
    where?: dtdevolucionWhereInput
    /**
     * Limit how many dtdevolucions to delete.
     */
    limit?: number
  }

  /**
   * dtdevolucion without action
   */
  export type dtdevolucionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevolucion
     */
    select?: dtdevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevolucion
     */
    omit?: dtdevolucionOmit<ExtArgs> | null
  }


  /**
   * Model dtdevoluciones
   */

  export type AggregateDtdevoluciones = {
    _count: DtdevolucionesCountAggregateOutputType | null
    _avg: DtdevolucionesAvgAggregateOutputType | null
    _sum: DtdevolucionesSumAggregateOutputType | null
    _min: DtdevolucionesMinAggregateOutputType | null
    _max: DtdevolucionesMaxAggregateOutputType | null
  }

  export type DtdevolucionesAvgAggregateOutputType = {
    itemnum: number | null
    devonum: number | null
    cantidad: number | null
  }

  export type DtdevolucionesSumAggregateOutputType = {
    itemnum: number | null
    devonum: number | null
    cantidad: number | null
  }

  export type DtdevolucionesMinAggregateOutputType = {
    itemnum: number | null
    devonum: number | null
    codart: string | null
    serial: string | null
    descripcion: string | null
    cantidad: number | null
  }

  export type DtdevolucionesMaxAggregateOutputType = {
    itemnum: number | null
    devonum: number | null
    codart: string | null
    serial: string | null
    descripcion: string | null
    cantidad: number | null
  }

  export type DtdevolucionesCountAggregateOutputType = {
    itemnum: number
    devonum: number
    codart: number
    serial: number
    descripcion: number
    cantidad: number
    _all: number
  }


  export type DtdevolucionesAvgAggregateInputType = {
    itemnum?: true
    devonum?: true
    cantidad?: true
  }

  export type DtdevolucionesSumAggregateInputType = {
    itemnum?: true
    devonum?: true
    cantidad?: true
  }

  export type DtdevolucionesMinAggregateInputType = {
    itemnum?: true
    devonum?: true
    codart?: true
    serial?: true
    descripcion?: true
    cantidad?: true
  }

  export type DtdevolucionesMaxAggregateInputType = {
    itemnum?: true
    devonum?: true
    codart?: true
    serial?: true
    descripcion?: true
    cantidad?: true
  }

  export type DtdevolucionesCountAggregateInputType = {
    itemnum?: true
    devonum?: true
    codart?: true
    serial?: true
    descripcion?: true
    cantidad?: true
    _all?: true
  }

  export type DtdevolucionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dtdevoluciones to aggregate.
     */
    where?: dtdevolucionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dtdevoluciones to fetch.
     */
    orderBy?: dtdevolucionesOrderByWithRelationInput | dtdevolucionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dtdevolucionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dtdevoluciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dtdevoluciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dtdevoluciones
    **/
    _count?: true | DtdevolucionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DtdevolucionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DtdevolucionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DtdevolucionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DtdevolucionesMaxAggregateInputType
  }

  export type GetDtdevolucionesAggregateType<T extends DtdevolucionesAggregateArgs> = {
        [P in keyof T & keyof AggregateDtdevoluciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDtdevoluciones[P]>
      : GetScalarType<T[P], AggregateDtdevoluciones[P]>
  }




  export type dtdevolucionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dtdevolucionesWhereInput
    orderBy?: dtdevolucionesOrderByWithAggregationInput | dtdevolucionesOrderByWithAggregationInput[]
    by: DtdevolucionesScalarFieldEnum[] | DtdevolucionesScalarFieldEnum
    having?: dtdevolucionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DtdevolucionesCountAggregateInputType | true
    _avg?: DtdevolucionesAvgAggregateInputType
    _sum?: DtdevolucionesSumAggregateInputType
    _min?: DtdevolucionesMinAggregateInputType
    _max?: DtdevolucionesMaxAggregateInputType
  }

  export type DtdevolucionesGroupByOutputType = {
    itemnum: number
    devonum: number
    codart: string
    serial: string
    descripcion: string
    cantidad: number
    _count: DtdevolucionesCountAggregateOutputType | null
    _avg: DtdevolucionesAvgAggregateOutputType | null
    _sum: DtdevolucionesSumAggregateOutputType | null
    _min: DtdevolucionesMinAggregateOutputType | null
    _max: DtdevolucionesMaxAggregateOutputType | null
  }

  type GetDtdevolucionesGroupByPayload<T extends dtdevolucionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DtdevolucionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DtdevolucionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DtdevolucionesGroupByOutputType[P]>
            : GetScalarType<T[P], DtdevolucionesGroupByOutputType[P]>
        }
      >
    >


  export type dtdevolucionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemnum?: boolean
    devonum?: boolean
    codart?: boolean
    serial?: boolean
    descripcion?: boolean
    cantidad?: boolean
  }, ExtArgs["result"]["dtdevoluciones"]>



  export type dtdevolucionesSelectScalar = {
    itemnum?: boolean
    devonum?: boolean
    codart?: boolean
    serial?: boolean
    descripcion?: boolean
    cantidad?: boolean
  }

  export type dtdevolucionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"itemnum" | "devonum" | "codart" | "serial" | "descripcion" | "cantidad", ExtArgs["result"]["dtdevoluciones"]>

  export type $dtdevolucionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dtdevoluciones"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      itemnum: number
      devonum: number
      codart: string
      serial: string
      descripcion: string
      cantidad: number
    }, ExtArgs["result"]["dtdevoluciones"]>
    composites: {}
  }

  type dtdevolucionesGetPayload<S extends boolean | null | undefined | dtdevolucionesDefaultArgs> = $Result.GetResult<Prisma.$dtdevolucionesPayload, S>

  type dtdevolucionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dtdevolucionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DtdevolucionesCountAggregateInputType | true
    }

  export interface dtdevolucionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dtdevoluciones'], meta: { name: 'dtdevoluciones' } }
    /**
     * Find zero or one Dtdevoluciones that matches the filter.
     * @param {dtdevolucionesFindUniqueArgs} args - Arguments to find a Dtdevoluciones
     * @example
     * // Get one Dtdevoluciones
     * const dtdevoluciones = await prisma.dtdevoluciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dtdevolucionesFindUniqueArgs>(args: SelectSubset<T, dtdevolucionesFindUniqueArgs<ExtArgs>>): Prisma__dtdevolucionesClient<$Result.GetResult<Prisma.$dtdevolucionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dtdevoluciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dtdevolucionesFindUniqueOrThrowArgs} args - Arguments to find a Dtdevoluciones
     * @example
     * // Get one Dtdevoluciones
     * const dtdevoluciones = await prisma.dtdevoluciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dtdevolucionesFindUniqueOrThrowArgs>(args: SelectSubset<T, dtdevolucionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dtdevolucionesClient<$Result.GetResult<Prisma.$dtdevolucionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dtdevoluciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dtdevolucionesFindFirstArgs} args - Arguments to find a Dtdevoluciones
     * @example
     * // Get one Dtdevoluciones
     * const dtdevoluciones = await prisma.dtdevoluciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dtdevolucionesFindFirstArgs>(args?: SelectSubset<T, dtdevolucionesFindFirstArgs<ExtArgs>>): Prisma__dtdevolucionesClient<$Result.GetResult<Prisma.$dtdevolucionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dtdevoluciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dtdevolucionesFindFirstOrThrowArgs} args - Arguments to find a Dtdevoluciones
     * @example
     * // Get one Dtdevoluciones
     * const dtdevoluciones = await prisma.dtdevoluciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dtdevolucionesFindFirstOrThrowArgs>(args?: SelectSubset<T, dtdevolucionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__dtdevolucionesClient<$Result.GetResult<Prisma.$dtdevolucionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dtdevoluciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dtdevolucionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dtdevoluciones
     * const dtdevoluciones = await prisma.dtdevoluciones.findMany()
     * 
     * // Get first 10 Dtdevoluciones
     * const dtdevoluciones = await prisma.dtdevoluciones.findMany({ take: 10 })
     * 
     * // Only select the `itemnum`
     * const dtdevolucionesWithItemnumOnly = await prisma.dtdevoluciones.findMany({ select: { itemnum: true } })
     * 
     */
    findMany<T extends dtdevolucionesFindManyArgs>(args?: SelectSubset<T, dtdevolucionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dtdevolucionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dtdevoluciones.
     * @param {dtdevolucionesCreateArgs} args - Arguments to create a Dtdevoluciones.
     * @example
     * // Create one Dtdevoluciones
     * const Dtdevoluciones = await prisma.dtdevoluciones.create({
     *   data: {
     *     // ... data to create a Dtdevoluciones
     *   }
     * })
     * 
     */
    create<T extends dtdevolucionesCreateArgs>(args: SelectSubset<T, dtdevolucionesCreateArgs<ExtArgs>>): Prisma__dtdevolucionesClient<$Result.GetResult<Prisma.$dtdevolucionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dtdevoluciones.
     * @param {dtdevolucionesCreateManyArgs} args - Arguments to create many Dtdevoluciones.
     * @example
     * // Create many Dtdevoluciones
     * const dtdevoluciones = await prisma.dtdevoluciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dtdevolucionesCreateManyArgs>(args?: SelectSubset<T, dtdevolucionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dtdevoluciones.
     * @param {dtdevolucionesDeleteArgs} args - Arguments to delete one Dtdevoluciones.
     * @example
     * // Delete one Dtdevoluciones
     * const Dtdevoluciones = await prisma.dtdevoluciones.delete({
     *   where: {
     *     // ... filter to delete one Dtdevoluciones
     *   }
     * })
     * 
     */
    delete<T extends dtdevolucionesDeleteArgs>(args: SelectSubset<T, dtdevolucionesDeleteArgs<ExtArgs>>): Prisma__dtdevolucionesClient<$Result.GetResult<Prisma.$dtdevolucionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dtdevoluciones.
     * @param {dtdevolucionesUpdateArgs} args - Arguments to update one Dtdevoluciones.
     * @example
     * // Update one Dtdevoluciones
     * const dtdevoluciones = await prisma.dtdevoluciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dtdevolucionesUpdateArgs>(args: SelectSubset<T, dtdevolucionesUpdateArgs<ExtArgs>>): Prisma__dtdevolucionesClient<$Result.GetResult<Prisma.$dtdevolucionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dtdevoluciones.
     * @param {dtdevolucionesDeleteManyArgs} args - Arguments to filter Dtdevoluciones to delete.
     * @example
     * // Delete a few Dtdevoluciones
     * const { count } = await prisma.dtdevoluciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dtdevolucionesDeleteManyArgs>(args?: SelectSubset<T, dtdevolucionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dtdevoluciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dtdevolucionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dtdevoluciones
     * const dtdevoluciones = await prisma.dtdevoluciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dtdevolucionesUpdateManyArgs>(args: SelectSubset<T, dtdevolucionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dtdevoluciones.
     * @param {dtdevolucionesUpsertArgs} args - Arguments to update or create a Dtdevoluciones.
     * @example
     * // Update or create a Dtdevoluciones
     * const dtdevoluciones = await prisma.dtdevoluciones.upsert({
     *   create: {
     *     // ... data to create a Dtdevoluciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dtdevoluciones we want to update
     *   }
     * })
     */
    upsert<T extends dtdevolucionesUpsertArgs>(args: SelectSubset<T, dtdevolucionesUpsertArgs<ExtArgs>>): Prisma__dtdevolucionesClient<$Result.GetResult<Prisma.$dtdevolucionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dtdevoluciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dtdevolucionesCountArgs} args - Arguments to filter Dtdevoluciones to count.
     * @example
     * // Count the number of Dtdevoluciones
     * const count = await prisma.dtdevoluciones.count({
     *   where: {
     *     // ... the filter for the Dtdevoluciones we want to count
     *   }
     * })
    **/
    count<T extends dtdevolucionesCountArgs>(
      args?: Subset<T, dtdevolucionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DtdevolucionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dtdevoluciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtdevolucionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DtdevolucionesAggregateArgs>(args: Subset<T, DtdevolucionesAggregateArgs>): Prisma.PrismaPromise<GetDtdevolucionesAggregateType<T>>

    /**
     * Group by Dtdevoluciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dtdevolucionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dtdevolucionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dtdevolucionesGroupByArgs['orderBy'] }
        : { orderBy?: dtdevolucionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dtdevolucionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDtdevolucionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dtdevoluciones model
   */
  readonly fields: dtdevolucionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dtdevoluciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dtdevolucionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dtdevoluciones model
   */
  interface dtdevolucionesFieldRefs {
    readonly itemnum: FieldRef<"dtdevoluciones", 'Int'>
    readonly devonum: FieldRef<"dtdevoluciones", 'Int'>
    readonly codart: FieldRef<"dtdevoluciones", 'String'>
    readonly serial: FieldRef<"dtdevoluciones", 'String'>
    readonly descripcion: FieldRef<"dtdevoluciones", 'String'>
    readonly cantidad: FieldRef<"dtdevoluciones", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * dtdevoluciones findUnique
   */
  export type dtdevolucionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevoluciones
     */
    select?: dtdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevoluciones
     */
    omit?: dtdevolucionesOmit<ExtArgs> | null
    /**
     * Filter, which dtdevoluciones to fetch.
     */
    where: dtdevolucionesWhereUniqueInput
  }

  /**
   * dtdevoluciones findUniqueOrThrow
   */
  export type dtdevolucionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevoluciones
     */
    select?: dtdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevoluciones
     */
    omit?: dtdevolucionesOmit<ExtArgs> | null
    /**
     * Filter, which dtdevoluciones to fetch.
     */
    where: dtdevolucionesWhereUniqueInput
  }

  /**
   * dtdevoluciones findFirst
   */
  export type dtdevolucionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevoluciones
     */
    select?: dtdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevoluciones
     */
    omit?: dtdevolucionesOmit<ExtArgs> | null
    /**
     * Filter, which dtdevoluciones to fetch.
     */
    where?: dtdevolucionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dtdevoluciones to fetch.
     */
    orderBy?: dtdevolucionesOrderByWithRelationInput | dtdevolucionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dtdevoluciones.
     */
    cursor?: dtdevolucionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dtdevoluciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dtdevoluciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dtdevoluciones.
     */
    distinct?: DtdevolucionesScalarFieldEnum | DtdevolucionesScalarFieldEnum[]
  }

  /**
   * dtdevoluciones findFirstOrThrow
   */
  export type dtdevolucionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevoluciones
     */
    select?: dtdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevoluciones
     */
    omit?: dtdevolucionesOmit<ExtArgs> | null
    /**
     * Filter, which dtdevoluciones to fetch.
     */
    where?: dtdevolucionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dtdevoluciones to fetch.
     */
    orderBy?: dtdevolucionesOrderByWithRelationInput | dtdevolucionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dtdevoluciones.
     */
    cursor?: dtdevolucionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dtdevoluciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dtdevoluciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dtdevoluciones.
     */
    distinct?: DtdevolucionesScalarFieldEnum | DtdevolucionesScalarFieldEnum[]
  }

  /**
   * dtdevoluciones findMany
   */
  export type dtdevolucionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevoluciones
     */
    select?: dtdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevoluciones
     */
    omit?: dtdevolucionesOmit<ExtArgs> | null
    /**
     * Filter, which dtdevoluciones to fetch.
     */
    where?: dtdevolucionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dtdevoluciones to fetch.
     */
    orderBy?: dtdevolucionesOrderByWithRelationInput | dtdevolucionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dtdevoluciones.
     */
    cursor?: dtdevolucionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dtdevoluciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dtdevoluciones.
     */
    skip?: number
    distinct?: DtdevolucionesScalarFieldEnum | DtdevolucionesScalarFieldEnum[]
  }

  /**
   * dtdevoluciones create
   */
  export type dtdevolucionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevoluciones
     */
    select?: dtdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevoluciones
     */
    omit?: dtdevolucionesOmit<ExtArgs> | null
    /**
     * The data needed to create a dtdevoluciones.
     */
    data: XOR<dtdevolucionesCreateInput, dtdevolucionesUncheckedCreateInput>
  }

  /**
   * dtdevoluciones createMany
   */
  export type dtdevolucionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dtdevoluciones.
     */
    data: dtdevolucionesCreateManyInput | dtdevolucionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dtdevoluciones update
   */
  export type dtdevolucionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevoluciones
     */
    select?: dtdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevoluciones
     */
    omit?: dtdevolucionesOmit<ExtArgs> | null
    /**
     * The data needed to update a dtdevoluciones.
     */
    data: XOR<dtdevolucionesUpdateInput, dtdevolucionesUncheckedUpdateInput>
    /**
     * Choose, which dtdevoluciones to update.
     */
    where: dtdevolucionesWhereUniqueInput
  }

  /**
   * dtdevoluciones updateMany
   */
  export type dtdevolucionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dtdevoluciones.
     */
    data: XOR<dtdevolucionesUpdateManyMutationInput, dtdevolucionesUncheckedUpdateManyInput>
    /**
     * Filter which dtdevoluciones to update
     */
    where?: dtdevolucionesWhereInput
    /**
     * Limit how many dtdevoluciones to update.
     */
    limit?: number
  }

  /**
   * dtdevoluciones upsert
   */
  export type dtdevolucionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevoluciones
     */
    select?: dtdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevoluciones
     */
    omit?: dtdevolucionesOmit<ExtArgs> | null
    /**
     * The filter to search for the dtdevoluciones to update in case it exists.
     */
    where: dtdevolucionesWhereUniqueInput
    /**
     * In case the dtdevoluciones found by the `where` argument doesn't exist, create a new dtdevoluciones with this data.
     */
    create: XOR<dtdevolucionesCreateInput, dtdevolucionesUncheckedCreateInput>
    /**
     * In case the dtdevoluciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dtdevolucionesUpdateInput, dtdevolucionesUncheckedUpdateInput>
  }

  /**
   * dtdevoluciones delete
   */
  export type dtdevolucionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevoluciones
     */
    select?: dtdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevoluciones
     */
    omit?: dtdevolucionesOmit<ExtArgs> | null
    /**
     * Filter which dtdevoluciones to delete.
     */
    where: dtdevolucionesWhereUniqueInput
  }

  /**
   * dtdevoluciones deleteMany
   */
  export type dtdevolucionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dtdevoluciones to delete
     */
    where?: dtdevolucionesWhereInput
    /**
     * Limit how many dtdevoluciones to delete.
     */
    limit?: number
  }

  /**
   * dtdevoluciones without action
   */
  export type dtdevolucionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dtdevoluciones
     */
    select?: dtdevolucionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dtdevoluciones
     */
    omit?: dtdevolucionesOmit<ExtArgs> | null
  }


  /**
   * Model hsplanpagos
   */

  export type AggregateHsplanpagos = {
    _count: HsplanpagosCountAggregateOutputType | null
    _avg: HsplanpagosAvgAggregateOutputType | null
    _sum: HsplanpagosSumAggregateOutputType | null
    _min: HsplanpagosMinAggregateOutputType | null
    _max: HsplanpagosMaxAggregateOutputType | null
  }

  export type HsplanpagosAvgAggregateOutputType = {
    numerodocumento: number | null
    numerofactura: number | null
    tasacambio: Decimal | null
    montoneto: Decimal | null
    montosaldo: Decimal | null
    owneruser: number | null
  }

  export type HsplanpagosSumAggregateOutputType = {
    numerodocumento: number | null
    numerofactura: number | null
    tasacambio: Decimal | null
    montoneto: Decimal | null
    montosaldo: Decimal | null
    owneruser: number | null
  }

  export type HsplanpagosMinAggregateOutputType = {
    unidad: string | null
    empresa: string | null
    tipodocumento: string | null
    numerodocumento: number | null
    codigobeneficiario: string | null
    beneficiario: string | null
    cuentabanco: string | null
    banco: string | null
    rifproveedor: string | null
    tipoproveedor: string | null
    monedaproveedor: string | null
    autorizadopagar: boolean | null
    fechaemision: Date | null
    fechavencimiento: Date | null
    fecharegistro: Date | null
    registradopor: string | null
    numerofactura: number | null
    observacion: string | null
    tasacambio: Decimal | null
    moneda: string | null
    montoneto: Decimal | null
    montosaldo: Decimal | null
    clasegasto: string | null
    owneruser: number | null
  }

  export type HsplanpagosMaxAggregateOutputType = {
    unidad: string | null
    empresa: string | null
    tipodocumento: string | null
    numerodocumento: number | null
    codigobeneficiario: string | null
    beneficiario: string | null
    cuentabanco: string | null
    banco: string | null
    rifproveedor: string | null
    tipoproveedor: string | null
    monedaproveedor: string | null
    autorizadopagar: boolean | null
    fechaemision: Date | null
    fechavencimiento: Date | null
    fecharegistro: Date | null
    registradopor: string | null
    numerofactura: number | null
    observacion: string | null
    tasacambio: Decimal | null
    moneda: string | null
    montoneto: Decimal | null
    montosaldo: Decimal | null
    clasegasto: string | null
    owneruser: number | null
  }

  export type HsplanpagosCountAggregateOutputType = {
    unidad: number
    empresa: number
    tipodocumento: number
    numerodocumento: number
    codigobeneficiario: number
    beneficiario: number
    cuentabanco: number
    banco: number
    rifproveedor: number
    tipoproveedor: number
    monedaproveedor: number
    autorizadopagar: number
    fechaemision: number
    fechavencimiento: number
    fecharegistro: number
    registradopor: number
    numerofactura: number
    observacion: number
    tasacambio: number
    moneda: number
    montoneto: number
    montosaldo: number
    clasegasto: number
    owneruser: number
    _all: number
  }


  export type HsplanpagosAvgAggregateInputType = {
    numerodocumento?: true
    numerofactura?: true
    tasacambio?: true
    montoneto?: true
    montosaldo?: true
    owneruser?: true
  }

  export type HsplanpagosSumAggregateInputType = {
    numerodocumento?: true
    numerofactura?: true
    tasacambio?: true
    montoneto?: true
    montosaldo?: true
    owneruser?: true
  }

  export type HsplanpagosMinAggregateInputType = {
    unidad?: true
    empresa?: true
    tipodocumento?: true
    numerodocumento?: true
    codigobeneficiario?: true
    beneficiario?: true
    cuentabanco?: true
    banco?: true
    rifproveedor?: true
    tipoproveedor?: true
    monedaproveedor?: true
    autorizadopagar?: true
    fechaemision?: true
    fechavencimiento?: true
    fecharegistro?: true
    registradopor?: true
    numerofactura?: true
    observacion?: true
    tasacambio?: true
    moneda?: true
    montoneto?: true
    montosaldo?: true
    clasegasto?: true
    owneruser?: true
  }

  export type HsplanpagosMaxAggregateInputType = {
    unidad?: true
    empresa?: true
    tipodocumento?: true
    numerodocumento?: true
    codigobeneficiario?: true
    beneficiario?: true
    cuentabanco?: true
    banco?: true
    rifproveedor?: true
    tipoproveedor?: true
    monedaproveedor?: true
    autorizadopagar?: true
    fechaemision?: true
    fechavencimiento?: true
    fecharegistro?: true
    registradopor?: true
    numerofactura?: true
    observacion?: true
    tasacambio?: true
    moneda?: true
    montoneto?: true
    montosaldo?: true
    clasegasto?: true
    owneruser?: true
  }

  export type HsplanpagosCountAggregateInputType = {
    unidad?: true
    empresa?: true
    tipodocumento?: true
    numerodocumento?: true
    codigobeneficiario?: true
    beneficiario?: true
    cuentabanco?: true
    banco?: true
    rifproveedor?: true
    tipoproveedor?: true
    monedaproveedor?: true
    autorizadopagar?: true
    fechaemision?: true
    fechavencimiento?: true
    fecharegistro?: true
    registradopor?: true
    numerofactura?: true
    observacion?: true
    tasacambio?: true
    moneda?: true
    montoneto?: true
    montosaldo?: true
    clasegasto?: true
    owneruser?: true
    _all?: true
  }

  export type HsplanpagosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsplanpagos to aggregate.
     */
    where?: hsplanpagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsplanpagos to fetch.
     */
    orderBy?: hsplanpagosOrderByWithRelationInput | hsplanpagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hsplanpagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsplanpagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsplanpagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hsplanpagos
    **/
    _count?: true | HsplanpagosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HsplanpagosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HsplanpagosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HsplanpagosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HsplanpagosMaxAggregateInputType
  }

  export type GetHsplanpagosAggregateType<T extends HsplanpagosAggregateArgs> = {
        [P in keyof T & keyof AggregateHsplanpagos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHsplanpagos[P]>
      : GetScalarType<T[P], AggregateHsplanpagos[P]>
  }




  export type hsplanpagosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsplanpagosWhereInput
    orderBy?: hsplanpagosOrderByWithAggregationInput | hsplanpagosOrderByWithAggregationInput[]
    by: HsplanpagosScalarFieldEnum[] | HsplanpagosScalarFieldEnum
    having?: hsplanpagosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HsplanpagosCountAggregateInputType | true
    _avg?: HsplanpagosAvgAggregateInputType
    _sum?: HsplanpagosSumAggregateInputType
    _min?: HsplanpagosMinAggregateInputType
    _max?: HsplanpagosMaxAggregateInputType
  }

  export type HsplanpagosGroupByOutputType = {
    unidad: string
    empresa: string
    tipodocumento: string
    numerodocumento: number
    codigobeneficiario: string | null
    beneficiario: string
    cuentabanco: string | null
    banco: string | null
    rifproveedor: string | null
    tipoproveedor: string
    monedaproveedor: string | null
    autorizadopagar: boolean
    fechaemision: Date
    fechavencimiento: Date
    fecharegistro: Date
    registradopor: string
    numerofactura: number
    observacion: string | null
    tasacambio: Decimal
    moneda: string
    montoneto: Decimal
    montosaldo: Decimal
    clasegasto: string | null
    owneruser: number
    _count: HsplanpagosCountAggregateOutputType | null
    _avg: HsplanpagosAvgAggregateOutputType | null
    _sum: HsplanpagosSumAggregateOutputType | null
    _min: HsplanpagosMinAggregateOutputType | null
    _max: HsplanpagosMaxAggregateOutputType | null
  }

  type GetHsplanpagosGroupByPayload<T extends hsplanpagosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HsplanpagosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HsplanpagosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HsplanpagosGroupByOutputType[P]>
            : GetScalarType<T[P], HsplanpagosGroupByOutputType[P]>
        }
      >
    >


  export type hsplanpagosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unidad?: boolean
    empresa?: boolean
    tipodocumento?: boolean
    numerodocumento?: boolean
    codigobeneficiario?: boolean
    beneficiario?: boolean
    cuentabanco?: boolean
    banco?: boolean
    rifproveedor?: boolean
    tipoproveedor?: boolean
    monedaproveedor?: boolean
    autorizadopagar?: boolean
    fechaemision?: boolean
    fechavencimiento?: boolean
    fecharegistro?: boolean
    registradopor?: boolean
    numerofactura?: boolean
    observacion?: boolean
    tasacambio?: boolean
    moneda?: boolean
    montoneto?: boolean
    montosaldo?: boolean
    clasegasto?: boolean
    owneruser?: boolean
  }, ExtArgs["result"]["hsplanpagos"]>



  export type hsplanpagosSelectScalar = {
    unidad?: boolean
    empresa?: boolean
    tipodocumento?: boolean
    numerodocumento?: boolean
    codigobeneficiario?: boolean
    beneficiario?: boolean
    cuentabanco?: boolean
    banco?: boolean
    rifproveedor?: boolean
    tipoproveedor?: boolean
    monedaproveedor?: boolean
    autorizadopagar?: boolean
    fechaemision?: boolean
    fechavencimiento?: boolean
    fecharegistro?: boolean
    registradopor?: boolean
    numerofactura?: boolean
    observacion?: boolean
    tasacambio?: boolean
    moneda?: boolean
    montoneto?: boolean
    montosaldo?: boolean
    clasegasto?: boolean
    owneruser?: boolean
  }

  export type hsplanpagosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"unidad" | "empresa" | "tipodocumento" | "numerodocumento" | "codigobeneficiario" | "beneficiario" | "cuentabanco" | "banco" | "rifproveedor" | "tipoproveedor" | "monedaproveedor" | "autorizadopagar" | "fechaemision" | "fechavencimiento" | "fecharegistro" | "registradopor" | "numerofactura" | "observacion" | "tasacambio" | "moneda" | "montoneto" | "montosaldo" | "clasegasto" | "owneruser", ExtArgs["result"]["hsplanpagos"]>

  export type $hsplanpagosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsplanpagos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      unidad: string
      empresa: string
      tipodocumento: string
      numerodocumento: number
      codigobeneficiario: string | null
      beneficiario: string
      cuentabanco: string | null
      banco: string | null
      rifproveedor: string | null
      tipoproveedor: string
      monedaproveedor: string | null
      autorizadopagar: boolean
      fechaemision: Date
      fechavencimiento: Date
      fecharegistro: Date
      registradopor: string
      numerofactura: number
      observacion: string | null
      tasacambio: Prisma.Decimal
      moneda: string
      montoneto: Prisma.Decimal
      montosaldo: Prisma.Decimal
      clasegasto: string | null
      owneruser: number
    }, ExtArgs["result"]["hsplanpagos"]>
    composites: {}
  }

  type hsplanpagosGetPayload<S extends boolean | null | undefined | hsplanpagosDefaultArgs> = $Result.GetResult<Prisma.$hsplanpagosPayload, S>

  type hsplanpagosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hsplanpagosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HsplanpagosCountAggregateInputType | true
    }

  export interface hsplanpagosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hsplanpagos'], meta: { name: 'hsplanpagos' } }
    /**
     * Find zero or one Hsplanpagos that matches the filter.
     * @param {hsplanpagosFindUniqueArgs} args - Arguments to find a Hsplanpagos
     * @example
     * // Get one Hsplanpagos
     * const hsplanpagos = await prisma.hsplanpagos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hsplanpagosFindUniqueArgs>(args: SelectSubset<T, hsplanpagosFindUniqueArgs<ExtArgs>>): Prisma__hsplanpagosClient<$Result.GetResult<Prisma.$hsplanpagosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hsplanpagos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hsplanpagosFindUniqueOrThrowArgs} args - Arguments to find a Hsplanpagos
     * @example
     * // Get one Hsplanpagos
     * const hsplanpagos = await prisma.hsplanpagos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hsplanpagosFindUniqueOrThrowArgs>(args: SelectSubset<T, hsplanpagosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hsplanpagosClient<$Result.GetResult<Prisma.$hsplanpagosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsplanpagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsplanpagosFindFirstArgs} args - Arguments to find a Hsplanpagos
     * @example
     * // Get one Hsplanpagos
     * const hsplanpagos = await prisma.hsplanpagos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hsplanpagosFindFirstArgs>(args?: SelectSubset<T, hsplanpagosFindFirstArgs<ExtArgs>>): Prisma__hsplanpagosClient<$Result.GetResult<Prisma.$hsplanpagosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsplanpagos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsplanpagosFindFirstOrThrowArgs} args - Arguments to find a Hsplanpagos
     * @example
     * // Get one Hsplanpagos
     * const hsplanpagos = await prisma.hsplanpagos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hsplanpagosFindFirstOrThrowArgs>(args?: SelectSubset<T, hsplanpagosFindFirstOrThrowArgs<ExtArgs>>): Prisma__hsplanpagosClient<$Result.GetResult<Prisma.$hsplanpagosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hsplanpagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsplanpagosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hsplanpagos
     * const hsplanpagos = await prisma.hsplanpagos.findMany()
     * 
     * // Get first 10 Hsplanpagos
     * const hsplanpagos = await prisma.hsplanpagos.findMany({ take: 10 })
     * 
     * // Only select the `unidad`
     * const hsplanpagosWithUnidadOnly = await prisma.hsplanpagos.findMany({ select: { unidad: true } })
     * 
     */
    findMany<T extends hsplanpagosFindManyArgs>(args?: SelectSubset<T, hsplanpagosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsplanpagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hsplanpagos.
     * @param {hsplanpagosCreateArgs} args - Arguments to create a Hsplanpagos.
     * @example
     * // Create one Hsplanpagos
     * const Hsplanpagos = await prisma.hsplanpagos.create({
     *   data: {
     *     // ... data to create a Hsplanpagos
     *   }
     * })
     * 
     */
    create<T extends hsplanpagosCreateArgs>(args: SelectSubset<T, hsplanpagosCreateArgs<ExtArgs>>): Prisma__hsplanpagosClient<$Result.GetResult<Prisma.$hsplanpagosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hsplanpagos.
     * @param {hsplanpagosCreateManyArgs} args - Arguments to create many Hsplanpagos.
     * @example
     * // Create many Hsplanpagos
     * const hsplanpagos = await prisma.hsplanpagos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hsplanpagosCreateManyArgs>(args?: SelectSubset<T, hsplanpagosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hsplanpagos.
     * @param {hsplanpagosDeleteArgs} args - Arguments to delete one Hsplanpagos.
     * @example
     * // Delete one Hsplanpagos
     * const Hsplanpagos = await prisma.hsplanpagos.delete({
     *   where: {
     *     // ... filter to delete one Hsplanpagos
     *   }
     * })
     * 
     */
    delete<T extends hsplanpagosDeleteArgs>(args: SelectSubset<T, hsplanpagosDeleteArgs<ExtArgs>>): Prisma__hsplanpagosClient<$Result.GetResult<Prisma.$hsplanpagosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hsplanpagos.
     * @param {hsplanpagosUpdateArgs} args - Arguments to update one Hsplanpagos.
     * @example
     * // Update one Hsplanpagos
     * const hsplanpagos = await prisma.hsplanpagos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hsplanpagosUpdateArgs>(args: SelectSubset<T, hsplanpagosUpdateArgs<ExtArgs>>): Prisma__hsplanpagosClient<$Result.GetResult<Prisma.$hsplanpagosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hsplanpagos.
     * @param {hsplanpagosDeleteManyArgs} args - Arguments to filter Hsplanpagos to delete.
     * @example
     * // Delete a few Hsplanpagos
     * const { count } = await prisma.hsplanpagos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hsplanpagosDeleteManyArgs>(args?: SelectSubset<T, hsplanpagosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsplanpagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsplanpagosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hsplanpagos
     * const hsplanpagos = await prisma.hsplanpagos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hsplanpagosUpdateManyArgs>(args: SelectSubset<T, hsplanpagosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hsplanpagos.
     * @param {hsplanpagosUpsertArgs} args - Arguments to update or create a Hsplanpagos.
     * @example
     * // Update or create a Hsplanpagos
     * const hsplanpagos = await prisma.hsplanpagos.upsert({
     *   create: {
     *     // ... data to create a Hsplanpagos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hsplanpagos we want to update
     *   }
     * })
     */
    upsert<T extends hsplanpagosUpsertArgs>(args: SelectSubset<T, hsplanpagosUpsertArgs<ExtArgs>>): Prisma__hsplanpagosClient<$Result.GetResult<Prisma.$hsplanpagosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hsplanpagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsplanpagosCountArgs} args - Arguments to filter Hsplanpagos to count.
     * @example
     * // Count the number of Hsplanpagos
     * const count = await prisma.hsplanpagos.count({
     *   where: {
     *     // ... the filter for the Hsplanpagos we want to count
     *   }
     * })
    **/
    count<T extends hsplanpagosCountArgs>(
      args?: Subset<T, hsplanpagosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HsplanpagosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hsplanpagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HsplanpagosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HsplanpagosAggregateArgs>(args: Subset<T, HsplanpagosAggregateArgs>): Prisma.PrismaPromise<GetHsplanpagosAggregateType<T>>

    /**
     * Group by Hsplanpagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsplanpagosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hsplanpagosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hsplanpagosGroupByArgs['orderBy'] }
        : { orderBy?: hsplanpagosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hsplanpagosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHsplanpagosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hsplanpagos model
   */
  readonly fields: hsplanpagosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hsplanpagos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hsplanpagosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hsplanpagos model
   */
  interface hsplanpagosFieldRefs {
    readonly unidad: FieldRef<"hsplanpagos", 'String'>
    readonly empresa: FieldRef<"hsplanpagos", 'String'>
    readonly tipodocumento: FieldRef<"hsplanpagos", 'String'>
    readonly numerodocumento: FieldRef<"hsplanpagos", 'Int'>
    readonly codigobeneficiario: FieldRef<"hsplanpagos", 'String'>
    readonly beneficiario: FieldRef<"hsplanpagos", 'String'>
    readonly cuentabanco: FieldRef<"hsplanpagos", 'String'>
    readonly banco: FieldRef<"hsplanpagos", 'String'>
    readonly rifproveedor: FieldRef<"hsplanpagos", 'String'>
    readonly tipoproveedor: FieldRef<"hsplanpagos", 'String'>
    readonly monedaproveedor: FieldRef<"hsplanpagos", 'String'>
    readonly autorizadopagar: FieldRef<"hsplanpagos", 'Boolean'>
    readonly fechaemision: FieldRef<"hsplanpagos", 'DateTime'>
    readonly fechavencimiento: FieldRef<"hsplanpagos", 'DateTime'>
    readonly fecharegistro: FieldRef<"hsplanpagos", 'DateTime'>
    readonly registradopor: FieldRef<"hsplanpagos", 'String'>
    readonly numerofactura: FieldRef<"hsplanpagos", 'Int'>
    readonly observacion: FieldRef<"hsplanpagos", 'String'>
    readonly tasacambio: FieldRef<"hsplanpagos", 'Decimal'>
    readonly moneda: FieldRef<"hsplanpagos", 'String'>
    readonly montoneto: FieldRef<"hsplanpagos", 'Decimal'>
    readonly montosaldo: FieldRef<"hsplanpagos", 'Decimal'>
    readonly clasegasto: FieldRef<"hsplanpagos", 'String'>
    readonly owneruser: FieldRef<"hsplanpagos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * hsplanpagos findUnique
   */
  export type hsplanpagosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsplanpagos
     */
    select?: hsplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsplanpagos
     */
    omit?: hsplanpagosOmit<ExtArgs> | null
    /**
     * Filter, which hsplanpagos to fetch.
     */
    where: hsplanpagosWhereUniqueInput
  }

  /**
   * hsplanpagos findUniqueOrThrow
   */
  export type hsplanpagosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsplanpagos
     */
    select?: hsplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsplanpagos
     */
    omit?: hsplanpagosOmit<ExtArgs> | null
    /**
     * Filter, which hsplanpagos to fetch.
     */
    where: hsplanpagosWhereUniqueInput
  }

  /**
   * hsplanpagos findFirst
   */
  export type hsplanpagosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsplanpagos
     */
    select?: hsplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsplanpagos
     */
    omit?: hsplanpagosOmit<ExtArgs> | null
    /**
     * Filter, which hsplanpagos to fetch.
     */
    where?: hsplanpagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsplanpagos to fetch.
     */
    orderBy?: hsplanpagosOrderByWithRelationInput | hsplanpagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsplanpagos.
     */
    cursor?: hsplanpagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsplanpagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsplanpagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsplanpagos.
     */
    distinct?: HsplanpagosScalarFieldEnum | HsplanpagosScalarFieldEnum[]
  }

  /**
   * hsplanpagos findFirstOrThrow
   */
  export type hsplanpagosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsplanpagos
     */
    select?: hsplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsplanpagos
     */
    omit?: hsplanpagosOmit<ExtArgs> | null
    /**
     * Filter, which hsplanpagos to fetch.
     */
    where?: hsplanpagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsplanpagos to fetch.
     */
    orderBy?: hsplanpagosOrderByWithRelationInput | hsplanpagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsplanpagos.
     */
    cursor?: hsplanpagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsplanpagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsplanpagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsplanpagos.
     */
    distinct?: HsplanpagosScalarFieldEnum | HsplanpagosScalarFieldEnum[]
  }

  /**
   * hsplanpagos findMany
   */
  export type hsplanpagosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsplanpagos
     */
    select?: hsplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsplanpagos
     */
    omit?: hsplanpagosOmit<ExtArgs> | null
    /**
     * Filter, which hsplanpagos to fetch.
     */
    where?: hsplanpagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsplanpagos to fetch.
     */
    orderBy?: hsplanpagosOrderByWithRelationInput | hsplanpagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hsplanpagos.
     */
    cursor?: hsplanpagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsplanpagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsplanpagos.
     */
    skip?: number
    distinct?: HsplanpagosScalarFieldEnum | HsplanpagosScalarFieldEnum[]
  }

  /**
   * hsplanpagos create
   */
  export type hsplanpagosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsplanpagos
     */
    select?: hsplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsplanpagos
     */
    omit?: hsplanpagosOmit<ExtArgs> | null
    /**
     * The data needed to create a hsplanpagos.
     */
    data: XOR<hsplanpagosCreateInput, hsplanpagosUncheckedCreateInput>
  }

  /**
   * hsplanpagos createMany
   */
  export type hsplanpagosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hsplanpagos.
     */
    data: hsplanpagosCreateManyInput | hsplanpagosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsplanpagos update
   */
  export type hsplanpagosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsplanpagos
     */
    select?: hsplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsplanpagos
     */
    omit?: hsplanpagosOmit<ExtArgs> | null
    /**
     * The data needed to update a hsplanpagos.
     */
    data: XOR<hsplanpagosUpdateInput, hsplanpagosUncheckedUpdateInput>
    /**
     * Choose, which hsplanpagos to update.
     */
    where: hsplanpagosWhereUniqueInput
  }

  /**
   * hsplanpagos updateMany
   */
  export type hsplanpagosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hsplanpagos.
     */
    data: XOR<hsplanpagosUpdateManyMutationInput, hsplanpagosUncheckedUpdateManyInput>
    /**
     * Filter which hsplanpagos to update
     */
    where?: hsplanpagosWhereInput
    /**
     * Limit how many hsplanpagos to update.
     */
    limit?: number
  }

  /**
   * hsplanpagos upsert
   */
  export type hsplanpagosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsplanpagos
     */
    select?: hsplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsplanpagos
     */
    omit?: hsplanpagosOmit<ExtArgs> | null
    /**
     * The filter to search for the hsplanpagos to update in case it exists.
     */
    where: hsplanpagosWhereUniqueInput
    /**
     * In case the hsplanpagos found by the `where` argument doesn't exist, create a new hsplanpagos with this data.
     */
    create: XOR<hsplanpagosCreateInput, hsplanpagosUncheckedCreateInput>
    /**
     * In case the hsplanpagos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hsplanpagosUpdateInput, hsplanpagosUncheckedUpdateInput>
  }

  /**
   * hsplanpagos delete
   */
  export type hsplanpagosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsplanpagos
     */
    select?: hsplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsplanpagos
     */
    omit?: hsplanpagosOmit<ExtArgs> | null
    /**
     * Filter which hsplanpagos to delete.
     */
    where: hsplanpagosWhereUniqueInput
  }

  /**
   * hsplanpagos deleteMany
   */
  export type hsplanpagosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsplanpagos to delete
     */
    where?: hsplanpagosWhereInput
    /**
     * Limit how many hsplanpagos to delete.
     */
    limit?: number
  }

  /**
   * hsplanpagos without action
   */
  export type hsplanpagosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsplanpagos
     */
    select?: hsplanpagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsplanpagos
     */
    omit?: hsplanpagosOmit<ExtArgs> | null
  }


  /**
   * Model metas
   */

  export type AggregateMetas = {
    _count: MetasCountAggregateOutputType | null
    _avg: MetasAvgAggregateOutputType | null
    _sum: MetasSumAggregateOutputType | null
    _min: MetasMinAggregateOutputType | null
    _max: MetasMaxAggregateOutputType | null
  }

  export type MetasAvgAggregateOutputType = {
    asignado: number | null
    utilizado: number | null
  }

  export type MetasSumAggregateOutputType = {
    asignado: number | null
    utilizado: number | null
  }

  export type MetasMinAggregateOutputType = {
    anio: string | null
    mes: string | null
    codven: string | null
    codart: string | null
    asignado: number | null
    utilizado: number | null
  }

  export type MetasMaxAggregateOutputType = {
    anio: string | null
    mes: string | null
    codven: string | null
    codart: string | null
    asignado: number | null
    utilizado: number | null
  }

  export type MetasCountAggregateOutputType = {
    anio: number
    mes: number
    codven: number
    codart: number
    asignado: number
    utilizado: number
    _all: number
  }


  export type MetasAvgAggregateInputType = {
    asignado?: true
    utilizado?: true
  }

  export type MetasSumAggregateInputType = {
    asignado?: true
    utilizado?: true
  }

  export type MetasMinAggregateInputType = {
    anio?: true
    mes?: true
    codven?: true
    codart?: true
    asignado?: true
    utilizado?: true
  }

  export type MetasMaxAggregateInputType = {
    anio?: true
    mes?: true
    codven?: true
    codart?: true
    asignado?: true
    utilizado?: true
  }

  export type MetasCountAggregateInputType = {
    anio?: true
    mes?: true
    codven?: true
    codart?: true
    asignado?: true
    utilizado?: true
    _all?: true
  }

  export type MetasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which metas to aggregate.
     */
    where?: metasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metas to fetch.
     */
    orderBy?: metasOrderByWithRelationInput | metasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: metasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned metas
    **/
    _count?: true | MetasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetasMaxAggregateInputType
  }

  export type GetMetasAggregateType<T extends MetasAggregateArgs> = {
        [P in keyof T & keyof AggregateMetas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetas[P]>
      : GetScalarType<T[P], AggregateMetas[P]>
  }




  export type metasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: metasWhereInput
    orderBy?: metasOrderByWithAggregationInput | metasOrderByWithAggregationInput[]
    by: MetasScalarFieldEnum[] | MetasScalarFieldEnum
    having?: metasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetasCountAggregateInputType | true
    _avg?: MetasAvgAggregateInputType
    _sum?: MetasSumAggregateInputType
    _min?: MetasMinAggregateInputType
    _max?: MetasMaxAggregateInputType
  }

  export type MetasGroupByOutputType = {
    anio: string
    mes: string
    codven: string
    codart: string
    asignado: number
    utilizado: number
    _count: MetasCountAggregateOutputType | null
    _avg: MetasAvgAggregateOutputType | null
    _sum: MetasSumAggregateOutputType | null
    _min: MetasMinAggregateOutputType | null
    _max: MetasMaxAggregateOutputType | null
  }

  type GetMetasGroupByPayload<T extends metasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetasGroupByOutputType[P]>
            : GetScalarType<T[P], MetasGroupByOutputType[P]>
        }
      >
    >


  export type metasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    anio?: boolean
    mes?: boolean
    codven?: boolean
    codart?: boolean
    asignado?: boolean
    utilizado?: boolean
  }, ExtArgs["result"]["metas"]>



  export type metasSelectScalar = {
    anio?: boolean
    mes?: boolean
    codven?: boolean
    codart?: boolean
    asignado?: boolean
    utilizado?: boolean
  }

  export type metasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"anio" | "mes" | "codven" | "codart" | "asignado" | "utilizado", ExtArgs["result"]["metas"]>

  export type $metasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "metas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      anio: string
      mes: string
      codven: string
      codart: string
      asignado: number
      utilizado: number
    }, ExtArgs["result"]["metas"]>
    composites: {}
  }

  type metasGetPayload<S extends boolean | null | undefined | metasDefaultArgs> = $Result.GetResult<Prisma.$metasPayload, S>

  type metasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<metasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetasCountAggregateInputType | true
    }

  export interface metasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['metas'], meta: { name: 'metas' } }
    /**
     * Find zero or one Metas that matches the filter.
     * @param {metasFindUniqueArgs} args - Arguments to find a Metas
     * @example
     * // Get one Metas
     * const metas = await prisma.metas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends metasFindUniqueArgs>(args: SelectSubset<T, metasFindUniqueArgs<ExtArgs>>): Prisma__metasClient<$Result.GetResult<Prisma.$metasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {metasFindUniqueOrThrowArgs} args - Arguments to find a Metas
     * @example
     * // Get one Metas
     * const metas = await prisma.metas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends metasFindUniqueOrThrowArgs>(args: SelectSubset<T, metasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__metasClient<$Result.GetResult<Prisma.$metasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metasFindFirstArgs} args - Arguments to find a Metas
     * @example
     * // Get one Metas
     * const metas = await prisma.metas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends metasFindFirstArgs>(args?: SelectSubset<T, metasFindFirstArgs<ExtArgs>>): Prisma__metasClient<$Result.GetResult<Prisma.$metasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metasFindFirstOrThrowArgs} args - Arguments to find a Metas
     * @example
     * // Get one Metas
     * const metas = await prisma.metas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends metasFindFirstOrThrowArgs>(args?: SelectSubset<T, metasFindFirstOrThrowArgs<ExtArgs>>): Prisma__metasClient<$Result.GetResult<Prisma.$metasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metas
     * const metas = await prisma.metas.findMany()
     * 
     * // Get first 10 Metas
     * const metas = await prisma.metas.findMany({ take: 10 })
     * 
     * // Only select the `anio`
     * const metasWithAnioOnly = await prisma.metas.findMany({ select: { anio: true } })
     * 
     */
    findMany<T extends metasFindManyArgs>(args?: SelectSubset<T, metasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$metasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metas.
     * @param {metasCreateArgs} args - Arguments to create a Metas.
     * @example
     * // Create one Metas
     * const Metas = await prisma.metas.create({
     *   data: {
     *     // ... data to create a Metas
     *   }
     * })
     * 
     */
    create<T extends metasCreateArgs>(args: SelectSubset<T, metasCreateArgs<ExtArgs>>): Prisma__metasClient<$Result.GetResult<Prisma.$metasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metas.
     * @param {metasCreateManyArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const metas = await prisma.metas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends metasCreateManyArgs>(args?: SelectSubset<T, metasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Metas.
     * @param {metasDeleteArgs} args - Arguments to delete one Metas.
     * @example
     * // Delete one Metas
     * const Metas = await prisma.metas.delete({
     *   where: {
     *     // ... filter to delete one Metas
     *   }
     * })
     * 
     */
    delete<T extends metasDeleteArgs>(args: SelectSubset<T, metasDeleteArgs<ExtArgs>>): Prisma__metasClient<$Result.GetResult<Prisma.$metasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metas.
     * @param {metasUpdateArgs} args - Arguments to update one Metas.
     * @example
     * // Update one Metas
     * const metas = await prisma.metas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends metasUpdateArgs>(args: SelectSubset<T, metasUpdateArgs<ExtArgs>>): Prisma__metasClient<$Result.GetResult<Prisma.$metasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metas.
     * @param {metasDeleteManyArgs} args - Arguments to filter Metas to delete.
     * @example
     * // Delete a few Metas
     * const { count } = await prisma.metas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends metasDeleteManyArgs>(args?: SelectSubset<T, metasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metas
     * const metas = await prisma.metas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends metasUpdateManyArgs>(args: SelectSubset<T, metasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Metas.
     * @param {metasUpsertArgs} args - Arguments to update or create a Metas.
     * @example
     * // Update or create a Metas
     * const metas = await prisma.metas.upsert({
     *   create: {
     *     // ... data to create a Metas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metas we want to update
     *   }
     * })
     */
    upsert<T extends metasUpsertArgs>(args: SelectSubset<T, metasUpsertArgs<ExtArgs>>): Prisma__metasClient<$Result.GetResult<Prisma.$metasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metasCountArgs} args - Arguments to filter Metas to count.
     * @example
     * // Count the number of Metas
     * const count = await prisma.metas.count({
     *   where: {
     *     // ... the filter for the Metas we want to count
     *   }
     * })
    **/
    count<T extends metasCountArgs>(
      args?: Subset<T, metasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetasAggregateArgs>(args: Subset<T, MetasAggregateArgs>): Prisma.PrismaPromise<GetMetasAggregateType<T>>

    /**
     * Group by Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends metasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: metasGroupByArgs['orderBy'] }
        : { orderBy?: metasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, metasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the metas model
   */
  readonly fields: metasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for metas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__metasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the metas model
   */
  interface metasFieldRefs {
    readonly anio: FieldRef<"metas", 'String'>
    readonly mes: FieldRef<"metas", 'String'>
    readonly codven: FieldRef<"metas", 'String'>
    readonly codart: FieldRef<"metas", 'String'>
    readonly asignado: FieldRef<"metas", 'Int'>
    readonly utilizado: FieldRef<"metas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * metas findUnique
   */
  export type metasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metas
     */
    select?: metasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metas
     */
    omit?: metasOmit<ExtArgs> | null
    /**
     * Filter, which metas to fetch.
     */
    where: metasWhereUniqueInput
  }

  /**
   * metas findUniqueOrThrow
   */
  export type metasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metas
     */
    select?: metasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metas
     */
    omit?: metasOmit<ExtArgs> | null
    /**
     * Filter, which metas to fetch.
     */
    where: metasWhereUniqueInput
  }

  /**
   * metas findFirst
   */
  export type metasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metas
     */
    select?: metasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metas
     */
    omit?: metasOmit<ExtArgs> | null
    /**
     * Filter, which metas to fetch.
     */
    where?: metasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metas to fetch.
     */
    orderBy?: metasOrderByWithRelationInput | metasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for metas.
     */
    cursor?: metasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of metas.
     */
    distinct?: MetasScalarFieldEnum | MetasScalarFieldEnum[]
  }

  /**
   * metas findFirstOrThrow
   */
  export type metasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metas
     */
    select?: metasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metas
     */
    omit?: metasOmit<ExtArgs> | null
    /**
     * Filter, which metas to fetch.
     */
    where?: metasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metas to fetch.
     */
    orderBy?: metasOrderByWithRelationInput | metasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for metas.
     */
    cursor?: metasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of metas.
     */
    distinct?: MetasScalarFieldEnum | MetasScalarFieldEnum[]
  }

  /**
   * metas findMany
   */
  export type metasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metas
     */
    select?: metasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metas
     */
    omit?: metasOmit<ExtArgs> | null
    /**
     * Filter, which metas to fetch.
     */
    where?: metasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metas to fetch.
     */
    orderBy?: metasOrderByWithRelationInput | metasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing metas.
     */
    cursor?: metasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metas.
     */
    skip?: number
    distinct?: MetasScalarFieldEnum | MetasScalarFieldEnum[]
  }

  /**
   * metas create
   */
  export type metasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metas
     */
    select?: metasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metas
     */
    omit?: metasOmit<ExtArgs> | null
    /**
     * The data needed to create a metas.
     */
    data: XOR<metasCreateInput, metasUncheckedCreateInput>
  }

  /**
   * metas createMany
   */
  export type metasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many metas.
     */
    data: metasCreateManyInput | metasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * metas update
   */
  export type metasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metas
     */
    select?: metasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metas
     */
    omit?: metasOmit<ExtArgs> | null
    /**
     * The data needed to update a metas.
     */
    data: XOR<metasUpdateInput, metasUncheckedUpdateInput>
    /**
     * Choose, which metas to update.
     */
    where: metasWhereUniqueInput
  }

  /**
   * metas updateMany
   */
  export type metasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update metas.
     */
    data: XOR<metasUpdateManyMutationInput, metasUncheckedUpdateManyInput>
    /**
     * Filter which metas to update
     */
    where?: metasWhereInput
    /**
     * Limit how many metas to update.
     */
    limit?: number
  }

  /**
   * metas upsert
   */
  export type metasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metas
     */
    select?: metasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metas
     */
    omit?: metasOmit<ExtArgs> | null
    /**
     * The filter to search for the metas to update in case it exists.
     */
    where: metasWhereUniqueInput
    /**
     * In case the metas found by the `where` argument doesn't exist, create a new metas with this data.
     */
    create: XOR<metasCreateInput, metasUncheckedCreateInput>
    /**
     * In case the metas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<metasUpdateInput, metasUncheckedUpdateInput>
  }

  /**
   * metas delete
   */
  export type metasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metas
     */
    select?: metasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metas
     */
    omit?: metasOmit<ExtArgs> | null
    /**
     * Filter which metas to delete.
     */
    where: metasWhereUniqueInput
  }

  /**
   * metas deleteMany
   */
  export type metasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which metas to delete
     */
    where?: metasWhereInput
    /**
     * Limit how many metas to delete.
     */
    limit?: number
  }

  /**
   * metas without action
   */
  export type metasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metas
     */
    select?: metasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metas
     */
    omit?: metasOmit<ExtArgs> | null
  }


  /**
   * Model mtclientes
   */

  export type AggregateMtclientes = {
    _count: MtclientesCountAggregateOutputType | null
    _avg: MtclientesAvgAggregateOutputType | null
    _sum: MtclientesSumAggregateOutputType | null
    _min: MtclientesMinAggregateOutputType | null
    _max: MtclientesMaxAggregateOutputType | null
  }

  export type MtclientesAvgAggregateOutputType = {
    netoultvta: Decimal | null
    montocred: Decimal | null
    diascred: number | null
    descppago: Decimal | null
    descglob: Decimal | null
    credito: Decimal | null
    saldo: Decimal | null
  }

  export type MtclientesSumAggregateOutputType = {
    netoultvta: Decimal | null
    montocred: Decimal | null
    diascred: number | null
    descppago: Decimal | null
    descglob: Decimal | null
    credito: Decimal | null
    saldo: Decimal | null
  }

  export type MtclientesMinAggregateOutputType = {
    codcli: string | null
    clides: string | null
    dirfiscal: string | null
    telefonos: string | null
    comentario: string | null
    contacto: string | null
    fecreg: Date | null
    fecultvta: Date | null
    netoultvta: Decimal | null
    montocred: Decimal | null
    diascred: number | null
    descppago: Decimal | null
    codzon: string | null
    codseg: string | null
    codven: string | null
    descglob: Decimal | null
    direntrega: string | null
    numrif: string | null
    tipocli: string | null
    tipocon: boolean | null
    email: string | null
    ciudad: string | null
    activo: boolean | null
    autorizado: boolean | null
    credito: Decimal | null
    saldo: Decimal | null
  }

  export type MtclientesMaxAggregateOutputType = {
    codcli: string | null
    clides: string | null
    dirfiscal: string | null
    telefonos: string | null
    comentario: string | null
    contacto: string | null
    fecreg: Date | null
    fecultvta: Date | null
    netoultvta: Decimal | null
    montocred: Decimal | null
    diascred: number | null
    descppago: Decimal | null
    codzon: string | null
    codseg: string | null
    codven: string | null
    descglob: Decimal | null
    direntrega: string | null
    numrif: string | null
    tipocli: string | null
    tipocon: boolean | null
    email: string | null
    ciudad: string | null
    activo: boolean | null
    autorizado: boolean | null
    credito: Decimal | null
    saldo: Decimal | null
  }

  export type MtclientesCountAggregateOutputType = {
    codcli: number
    clides: number
    dirfiscal: number
    telefonos: number
    comentario: number
    contacto: number
    fecreg: number
    fecultvta: number
    netoultvta: number
    montocred: number
    diascred: number
    descppago: number
    codzon: number
    codseg: number
    codven: number
    descglob: number
    direntrega: number
    numrif: number
    tipocli: number
    tipocon: number
    email: number
    ciudad: number
    activo: number
    autorizado: number
    credito: number
    saldo: number
    _all: number
  }


  export type MtclientesAvgAggregateInputType = {
    netoultvta?: true
    montocred?: true
    diascred?: true
    descppago?: true
    descglob?: true
    credito?: true
    saldo?: true
  }

  export type MtclientesSumAggregateInputType = {
    netoultvta?: true
    montocred?: true
    diascred?: true
    descppago?: true
    descglob?: true
    credito?: true
    saldo?: true
  }

  export type MtclientesMinAggregateInputType = {
    codcli?: true
    clides?: true
    dirfiscal?: true
    telefonos?: true
    comentario?: true
    contacto?: true
    fecreg?: true
    fecultvta?: true
    netoultvta?: true
    montocred?: true
    diascred?: true
    descppago?: true
    codzon?: true
    codseg?: true
    codven?: true
    descglob?: true
    direntrega?: true
    numrif?: true
    tipocli?: true
    tipocon?: true
    email?: true
    ciudad?: true
    activo?: true
    autorizado?: true
    credito?: true
    saldo?: true
  }

  export type MtclientesMaxAggregateInputType = {
    codcli?: true
    clides?: true
    dirfiscal?: true
    telefonos?: true
    comentario?: true
    contacto?: true
    fecreg?: true
    fecultvta?: true
    netoultvta?: true
    montocred?: true
    diascred?: true
    descppago?: true
    codzon?: true
    codseg?: true
    codven?: true
    descglob?: true
    direntrega?: true
    numrif?: true
    tipocli?: true
    tipocon?: true
    email?: true
    ciudad?: true
    activo?: true
    autorizado?: true
    credito?: true
    saldo?: true
  }

  export type MtclientesCountAggregateInputType = {
    codcli?: true
    clides?: true
    dirfiscal?: true
    telefonos?: true
    comentario?: true
    contacto?: true
    fecreg?: true
    fecultvta?: true
    netoultvta?: true
    montocred?: true
    diascred?: true
    descppago?: true
    codzon?: true
    codseg?: true
    codven?: true
    descglob?: true
    direntrega?: true
    numrif?: true
    tipocli?: true
    tipocon?: true
    email?: true
    ciudad?: true
    activo?: true
    autorizado?: true
    credito?: true
    saldo?: true
    _all?: true
  }

  export type MtclientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mtclientes to aggregate.
     */
    where?: mtclientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mtclientes to fetch.
     */
    orderBy?: mtclientesOrderByWithRelationInput | mtclientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mtclientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mtclientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mtclientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mtclientes
    **/
    _count?: true | MtclientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MtclientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MtclientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MtclientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MtclientesMaxAggregateInputType
  }

  export type GetMtclientesAggregateType<T extends MtclientesAggregateArgs> = {
        [P in keyof T & keyof AggregateMtclientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMtclientes[P]>
      : GetScalarType<T[P], AggregateMtclientes[P]>
  }




  export type mtclientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mtclientesWhereInput
    orderBy?: mtclientesOrderByWithAggregationInput | mtclientesOrderByWithAggregationInput[]
    by: MtclientesScalarFieldEnum[] | MtclientesScalarFieldEnum
    having?: mtclientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MtclientesCountAggregateInputType | true
    _avg?: MtclientesAvgAggregateInputType
    _sum?: MtclientesSumAggregateInputType
    _min?: MtclientesMinAggregateInputType
    _max?: MtclientesMaxAggregateInputType
  }

  export type MtclientesGroupByOutputType = {
    codcli: string
    clides: string
    dirfiscal: string
    telefonos: string | null
    comentario: string | null
    contacto: string | null
    fecreg: Date
    fecultvta: Date | null
    netoultvta: Decimal
    montocred: Decimal
    diascred: number
    descppago: Decimal
    codzon: string
    codseg: string
    codven: string | null
    descglob: Decimal
    direntrega: string | null
    numrif: string
    tipocli: string
    tipocon: boolean
    email: string | null
    ciudad: string
    activo: boolean
    autorizado: boolean
    credito: Decimal
    saldo: Decimal
    _count: MtclientesCountAggregateOutputType | null
    _avg: MtclientesAvgAggregateOutputType | null
    _sum: MtclientesSumAggregateOutputType | null
    _min: MtclientesMinAggregateOutputType | null
    _max: MtclientesMaxAggregateOutputType | null
  }

  type GetMtclientesGroupByPayload<T extends mtclientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MtclientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MtclientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MtclientesGroupByOutputType[P]>
            : GetScalarType<T[P], MtclientesGroupByOutputType[P]>
        }
      >
    >


  export type mtclientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codcli?: boolean
    clides?: boolean
    dirfiscal?: boolean
    telefonos?: boolean
    comentario?: boolean
    contacto?: boolean
    fecreg?: boolean
    fecultvta?: boolean
    netoultvta?: boolean
    montocred?: boolean
    diascred?: boolean
    descppago?: boolean
    codzon?: boolean
    codseg?: boolean
    codven?: boolean
    descglob?: boolean
    direntrega?: boolean
    numrif?: boolean
    tipocli?: boolean
    tipocon?: boolean
    email?: boolean
    ciudad?: boolean
    activo?: boolean
    autorizado?: boolean
    credito?: boolean
    saldo?: boolean
  }, ExtArgs["result"]["mtclientes"]>



  export type mtclientesSelectScalar = {
    codcli?: boolean
    clides?: boolean
    dirfiscal?: boolean
    telefonos?: boolean
    comentario?: boolean
    contacto?: boolean
    fecreg?: boolean
    fecultvta?: boolean
    netoultvta?: boolean
    montocred?: boolean
    diascred?: boolean
    descppago?: boolean
    codzon?: boolean
    codseg?: boolean
    codven?: boolean
    descglob?: boolean
    direntrega?: boolean
    numrif?: boolean
    tipocli?: boolean
    tipocon?: boolean
    email?: boolean
    ciudad?: boolean
    activo?: boolean
    autorizado?: boolean
    credito?: boolean
    saldo?: boolean
  }

  export type mtclientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codcli" | "clides" | "dirfiscal" | "telefonos" | "comentario" | "contacto" | "fecreg" | "fecultvta" | "netoultvta" | "montocred" | "diascred" | "descppago" | "codzon" | "codseg" | "codven" | "descglob" | "direntrega" | "numrif" | "tipocli" | "tipocon" | "email" | "ciudad" | "activo" | "autorizado" | "credito" | "saldo", ExtArgs["result"]["mtclientes"]>

  export type $mtclientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mtclientes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      codcli: string
      clides: string
      dirfiscal: string
      telefonos: string | null
      comentario: string | null
      contacto: string | null
      fecreg: Date
      fecultvta: Date | null
      netoultvta: Prisma.Decimal
      montocred: Prisma.Decimal
      diascred: number
      descppago: Prisma.Decimal
      codzon: string
      codseg: string
      codven: string | null
      descglob: Prisma.Decimal
      direntrega: string | null
      numrif: string
      tipocli: string
      tipocon: boolean
      email: string | null
      ciudad: string
      activo: boolean
      autorizado: boolean
      credito: Prisma.Decimal
      saldo: Prisma.Decimal
    }, ExtArgs["result"]["mtclientes"]>
    composites: {}
  }

  type mtclientesGetPayload<S extends boolean | null | undefined | mtclientesDefaultArgs> = $Result.GetResult<Prisma.$mtclientesPayload, S>

  type mtclientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mtclientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MtclientesCountAggregateInputType | true
    }

  export interface mtclientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mtclientes'], meta: { name: 'mtclientes' } }
    /**
     * Find zero or one Mtclientes that matches the filter.
     * @param {mtclientesFindUniqueArgs} args - Arguments to find a Mtclientes
     * @example
     * // Get one Mtclientes
     * const mtclientes = await prisma.mtclientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mtclientesFindUniqueArgs>(args: SelectSubset<T, mtclientesFindUniqueArgs<ExtArgs>>): Prisma__mtclientesClient<$Result.GetResult<Prisma.$mtclientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mtclientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mtclientesFindUniqueOrThrowArgs} args - Arguments to find a Mtclientes
     * @example
     * // Get one Mtclientes
     * const mtclientes = await prisma.mtclientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mtclientesFindUniqueOrThrowArgs>(args: SelectSubset<T, mtclientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mtclientesClient<$Result.GetResult<Prisma.$mtclientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mtclientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtclientesFindFirstArgs} args - Arguments to find a Mtclientes
     * @example
     * // Get one Mtclientes
     * const mtclientes = await prisma.mtclientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mtclientesFindFirstArgs>(args?: SelectSubset<T, mtclientesFindFirstArgs<ExtArgs>>): Prisma__mtclientesClient<$Result.GetResult<Prisma.$mtclientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mtclientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtclientesFindFirstOrThrowArgs} args - Arguments to find a Mtclientes
     * @example
     * // Get one Mtclientes
     * const mtclientes = await prisma.mtclientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mtclientesFindFirstOrThrowArgs>(args?: SelectSubset<T, mtclientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__mtclientesClient<$Result.GetResult<Prisma.$mtclientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mtclientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtclientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mtclientes
     * const mtclientes = await prisma.mtclientes.findMany()
     * 
     * // Get first 10 Mtclientes
     * const mtclientes = await prisma.mtclientes.findMany({ take: 10 })
     * 
     * // Only select the `codcli`
     * const mtclientesWithCodcliOnly = await prisma.mtclientes.findMany({ select: { codcli: true } })
     * 
     */
    findMany<T extends mtclientesFindManyArgs>(args?: SelectSubset<T, mtclientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mtclientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mtclientes.
     * @param {mtclientesCreateArgs} args - Arguments to create a Mtclientes.
     * @example
     * // Create one Mtclientes
     * const Mtclientes = await prisma.mtclientes.create({
     *   data: {
     *     // ... data to create a Mtclientes
     *   }
     * })
     * 
     */
    create<T extends mtclientesCreateArgs>(args: SelectSubset<T, mtclientesCreateArgs<ExtArgs>>): Prisma__mtclientesClient<$Result.GetResult<Prisma.$mtclientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mtclientes.
     * @param {mtclientesCreateManyArgs} args - Arguments to create many Mtclientes.
     * @example
     * // Create many Mtclientes
     * const mtclientes = await prisma.mtclientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mtclientesCreateManyArgs>(args?: SelectSubset<T, mtclientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mtclientes.
     * @param {mtclientesDeleteArgs} args - Arguments to delete one Mtclientes.
     * @example
     * // Delete one Mtclientes
     * const Mtclientes = await prisma.mtclientes.delete({
     *   where: {
     *     // ... filter to delete one Mtclientes
     *   }
     * })
     * 
     */
    delete<T extends mtclientesDeleteArgs>(args: SelectSubset<T, mtclientesDeleteArgs<ExtArgs>>): Prisma__mtclientesClient<$Result.GetResult<Prisma.$mtclientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mtclientes.
     * @param {mtclientesUpdateArgs} args - Arguments to update one Mtclientes.
     * @example
     * // Update one Mtclientes
     * const mtclientes = await prisma.mtclientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mtclientesUpdateArgs>(args: SelectSubset<T, mtclientesUpdateArgs<ExtArgs>>): Prisma__mtclientesClient<$Result.GetResult<Prisma.$mtclientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mtclientes.
     * @param {mtclientesDeleteManyArgs} args - Arguments to filter Mtclientes to delete.
     * @example
     * // Delete a few Mtclientes
     * const { count } = await prisma.mtclientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mtclientesDeleteManyArgs>(args?: SelectSubset<T, mtclientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mtclientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtclientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mtclientes
     * const mtclientes = await prisma.mtclientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mtclientesUpdateManyArgs>(args: SelectSubset<T, mtclientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mtclientes.
     * @param {mtclientesUpsertArgs} args - Arguments to update or create a Mtclientes.
     * @example
     * // Update or create a Mtclientes
     * const mtclientes = await prisma.mtclientes.upsert({
     *   create: {
     *     // ... data to create a Mtclientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mtclientes we want to update
     *   }
     * })
     */
    upsert<T extends mtclientesUpsertArgs>(args: SelectSubset<T, mtclientesUpsertArgs<ExtArgs>>): Prisma__mtclientesClient<$Result.GetResult<Prisma.$mtclientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mtclientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtclientesCountArgs} args - Arguments to filter Mtclientes to count.
     * @example
     * // Count the number of Mtclientes
     * const count = await prisma.mtclientes.count({
     *   where: {
     *     // ... the filter for the Mtclientes we want to count
     *   }
     * })
    **/
    count<T extends mtclientesCountArgs>(
      args?: Subset<T, mtclientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MtclientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mtclientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtclientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MtclientesAggregateArgs>(args: Subset<T, MtclientesAggregateArgs>): Prisma.PrismaPromise<GetMtclientesAggregateType<T>>

    /**
     * Group by Mtclientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtclientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mtclientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mtclientesGroupByArgs['orderBy'] }
        : { orderBy?: mtclientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mtclientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMtclientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mtclientes model
   */
  readonly fields: mtclientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mtclientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mtclientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mtclientes model
   */
  interface mtclientesFieldRefs {
    readonly codcli: FieldRef<"mtclientes", 'String'>
    readonly clides: FieldRef<"mtclientes", 'String'>
    readonly dirfiscal: FieldRef<"mtclientes", 'String'>
    readonly telefonos: FieldRef<"mtclientes", 'String'>
    readonly comentario: FieldRef<"mtclientes", 'String'>
    readonly contacto: FieldRef<"mtclientes", 'String'>
    readonly fecreg: FieldRef<"mtclientes", 'DateTime'>
    readonly fecultvta: FieldRef<"mtclientes", 'DateTime'>
    readonly netoultvta: FieldRef<"mtclientes", 'Decimal'>
    readonly montocred: FieldRef<"mtclientes", 'Decimal'>
    readonly diascred: FieldRef<"mtclientes", 'Int'>
    readonly descppago: FieldRef<"mtclientes", 'Decimal'>
    readonly codzon: FieldRef<"mtclientes", 'String'>
    readonly codseg: FieldRef<"mtclientes", 'String'>
    readonly codven: FieldRef<"mtclientes", 'String'>
    readonly descglob: FieldRef<"mtclientes", 'Decimal'>
    readonly direntrega: FieldRef<"mtclientes", 'String'>
    readonly numrif: FieldRef<"mtclientes", 'String'>
    readonly tipocli: FieldRef<"mtclientes", 'String'>
    readonly tipocon: FieldRef<"mtclientes", 'Boolean'>
    readonly email: FieldRef<"mtclientes", 'String'>
    readonly ciudad: FieldRef<"mtclientes", 'String'>
    readonly activo: FieldRef<"mtclientes", 'Boolean'>
    readonly autorizado: FieldRef<"mtclientes", 'Boolean'>
    readonly credito: FieldRef<"mtclientes", 'Decimal'>
    readonly saldo: FieldRef<"mtclientes", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * mtclientes findUnique
   */
  export type mtclientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtclientes
     */
    select?: mtclientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtclientes
     */
    omit?: mtclientesOmit<ExtArgs> | null
    /**
     * Filter, which mtclientes to fetch.
     */
    where: mtclientesWhereUniqueInput
  }

  /**
   * mtclientes findUniqueOrThrow
   */
  export type mtclientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtclientes
     */
    select?: mtclientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtclientes
     */
    omit?: mtclientesOmit<ExtArgs> | null
    /**
     * Filter, which mtclientes to fetch.
     */
    where: mtclientesWhereUniqueInput
  }

  /**
   * mtclientes findFirst
   */
  export type mtclientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtclientes
     */
    select?: mtclientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtclientes
     */
    omit?: mtclientesOmit<ExtArgs> | null
    /**
     * Filter, which mtclientes to fetch.
     */
    where?: mtclientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mtclientes to fetch.
     */
    orderBy?: mtclientesOrderByWithRelationInput | mtclientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mtclientes.
     */
    cursor?: mtclientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mtclientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mtclientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mtclientes.
     */
    distinct?: MtclientesScalarFieldEnum | MtclientesScalarFieldEnum[]
  }

  /**
   * mtclientes findFirstOrThrow
   */
  export type mtclientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtclientes
     */
    select?: mtclientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtclientes
     */
    omit?: mtclientesOmit<ExtArgs> | null
    /**
     * Filter, which mtclientes to fetch.
     */
    where?: mtclientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mtclientes to fetch.
     */
    orderBy?: mtclientesOrderByWithRelationInput | mtclientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mtclientes.
     */
    cursor?: mtclientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mtclientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mtclientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mtclientes.
     */
    distinct?: MtclientesScalarFieldEnum | MtclientesScalarFieldEnum[]
  }

  /**
   * mtclientes findMany
   */
  export type mtclientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtclientes
     */
    select?: mtclientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtclientes
     */
    omit?: mtclientesOmit<ExtArgs> | null
    /**
     * Filter, which mtclientes to fetch.
     */
    where?: mtclientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mtclientes to fetch.
     */
    orderBy?: mtclientesOrderByWithRelationInput | mtclientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mtclientes.
     */
    cursor?: mtclientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mtclientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mtclientes.
     */
    skip?: number
    distinct?: MtclientesScalarFieldEnum | MtclientesScalarFieldEnum[]
  }

  /**
   * mtclientes create
   */
  export type mtclientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtclientes
     */
    select?: mtclientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtclientes
     */
    omit?: mtclientesOmit<ExtArgs> | null
    /**
     * The data needed to create a mtclientes.
     */
    data: XOR<mtclientesCreateInput, mtclientesUncheckedCreateInput>
  }

  /**
   * mtclientes createMany
   */
  export type mtclientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mtclientes.
     */
    data: mtclientesCreateManyInput | mtclientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mtclientes update
   */
  export type mtclientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtclientes
     */
    select?: mtclientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtclientes
     */
    omit?: mtclientesOmit<ExtArgs> | null
    /**
     * The data needed to update a mtclientes.
     */
    data: XOR<mtclientesUpdateInput, mtclientesUncheckedUpdateInput>
    /**
     * Choose, which mtclientes to update.
     */
    where: mtclientesWhereUniqueInput
  }

  /**
   * mtclientes updateMany
   */
  export type mtclientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mtclientes.
     */
    data: XOR<mtclientesUpdateManyMutationInput, mtclientesUncheckedUpdateManyInput>
    /**
     * Filter which mtclientes to update
     */
    where?: mtclientesWhereInput
    /**
     * Limit how many mtclientes to update.
     */
    limit?: number
  }

  /**
   * mtclientes upsert
   */
  export type mtclientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtclientes
     */
    select?: mtclientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtclientes
     */
    omit?: mtclientesOmit<ExtArgs> | null
    /**
     * The filter to search for the mtclientes to update in case it exists.
     */
    where: mtclientesWhereUniqueInput
    /**
     * In case the mtclientes found by the `where` argument doesn't exist, create a new mtclientes with this data.
     */
    create: XOR<mtclientesCreateInput, mtclientesUncheckedCreateInput>
    /**
     * In case the mtclientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mtclientesUpdateInput, mtclientesUncheckedUpdateInput>
  }

  /**
   * mtclientes delete
   */
  export type mtclientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtclientes
     */
    select?: mtclientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtclientes
     */
    omit?: mtclientesOmit<ExtArgs> | null
    /**
     * Filter which mtclientes to delete.
     */
    where: mtclientesWhereUniqueInput
  }

  /**
   * mtclientes deleteMany
   */
  export type mtclientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mtclientes to delete
     */
    where?: mtclientesWhereInput
    /**
     * Limit how many mtclientes to delete.
     */
    limit?: number
  }

  /**
   * mtclientes without action
   */
  export type mtclientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtclientes
     */
    select?: mtclientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtclientes
     */
    omit?: mtclientesOmit<ExtArgs> | null
  }


  /**
   * Model mtprofitart
   */

  export type AggregateMtprofitart = {
    _count: MtprofitartCountAggregateOutputType | null
    _avg: MtprofitartAvgAggregateOutputType | null
    _sum: MtprofitartSumAggregateOutputType | null
    _min: MtprofitartMinAggregateOutputType | null
    _max: MtprofitartMaxAggregateOutputType | null
  }

  export type MtprofitartAvgAggregateOutputType = {
    unirelac: Decimal | null
    stockact: number | null
    stockcom: number | null
    stocklle: number | null
    stockdes: number | null
    sunirelac: Decimal | null
    sstockact: number | null
    sstockcom: number | null
    sstocklle: number | null
    sstockdes: number | null
    precvta1: Decimal | null
    precvta2: Decimal | null
    precvta3: Decimal | null
    precvta4: Decimal | null
    precvta5: Decimal | null
    ultcosun: Decimal | null
    cosproun: Decimal | null
    cosunan: Decimal | null
    ultcosunom: Decimal | null
    cosprounom: Decimal | null
    cosunanom: Decimal | null
    diasrepo: number | null
    compuesto: number | null
    peso: Decimal | null
    volumen: Decimal | null
    medalto: number | null
    medancho: number | null
    medlargo: number | null
  }

  export type MtprofitartSumAggregateOutputType = {
    unirelac: Decimal | null
    stockact: number | null
    stockcom: number | null
    stocklle: number | null
    stockdes: number | null
    sunirelac: Decimal | null
    sstockact: number | null
    sstockcom: number | null
    sstocklle: number | null
    sstockdes: number | null
    precvta1: Decimal | null
    precvta2: Decimal | null
    precvta3: Decimal | null
    precvta4: Decimal | null
    precvta5: Decimal | null
    ultcosun: Decimal | null
    cosproun: Decimal | null
    cosunan: Decimal | null
    ultcosunom: Decimal | null
    cosprounom: Decimal | null
    cosunanom: Decimal | null
    diasrepo: number | null
    compuesto: number | null
    peso: Decimal | null
    volumen: Decimal | null
    medalto: number | null
    medancho: number | null
    medlargo: number | null
  }

  export type MtprofitartMinAggregateOutputType = {
    codart: string | null
    artdes: string | null
    fecrec: Date | null
    mseriales: boolean | null
    mlote: boolean | null
    mgarantia: boolean | null
    codlin: string | null
    codcat: string | null
    codsubl: string | null
    codcolor: string | null
    codbarra: string | null
    artref: string | null
    modelo: string | null
    coment: string | null
    univenta: string | null
    unicompra: string | null
    unirelac: Decimal | null
    stockact: number | null
    stockcom: number | null
    stocklle: number | null
    stockdes: number | null
    suniventa: string | null
    sunicompra: string | null
    sunirelac: Decimal | null
    sstockact: number | null
    sstockcom: number | null
    sstocklle: number | null
    sstockdes: number | null
    precioom: boolean | null
    precvta1: Decimal | null
    fecprecv1: Date | null
    precvta2: Decimal | null
    fecprecv2: Date | null
    precvta3: Decimal | null
    fecprecv3: Date | null
    precvta4: Decimal | null
    fecprecv4: Date | null
    precvta5: Decimal | null
    fecprecv5: Date | null
    fecdesp5: Date | null
    fechasp5: Date | null
    ultcosun: Decimal | null
    fultcosun: Date | null
    cosproun: Decimal | null
    fcosproun: Date | null
    cosunan: Decimal | null
    fcosunan: Date | null
    ultcosunom: Decimal | null
    fultcosunom: Date | null
    cosprounom: Decimal | null
    fcosprounom: Date | null
    cosunanom: Decimal | null
    fcosunanom: Date | null
    tipocosto: string | null
    invfisico: boolean | null
    diasrepo: number | null
    tipoart: string | null
    anulado: boolean | null
    tipoimp: string | null
    compuesto: number | null
    peso: Decimal | null
    volumen: Decimal | null
    medalto: number | null
    medancho: number | null
    medlargo: number | null
  }

  export type MtprofitartMaxAggregateOutputType = {
    codart: string | null
    artdes: string | null
    fecrec: Date | null
    mseriales: boolean | null
    mlote: boolean | null
    mgarantia: boolean | null
    codlin: string | null
    codcat: string | null
    codsubl: string | null
    codcolor: string | null
    codbarra: string | null
    artref: string | null
    modelo: string | null
    coment: string | null
    univenta: string | null
    unicompra: string | null
    unirelac: Decimal | null
    stockact: number | null
    stockcom: number | null
    stocklle: number | null
    stockdes: number | null
    suniventa: string | null
    sunicompra: string | null
    sunirelac: Decimal | null
    sstockact: number | null
    sstockcom: number | null
    sstocklle: number | null
    sstockdes: number | null
    precioom: boolean | null
    precvta1: Decimal | null
    fecprecv1: Date | null
    precvta2: Decimal | null
    fecprecv2: Date | null
    precvta3: Decimal | null
    fecprecv3: Date | null
    precvta4: Decimal | null
    fecprecv4: Date | null
    precvta5: Decimal | null
    fecprecv5: Date | null
    fecdesp5: Date | null
    fechasp5: Date | null
    ultcosun: Decimal | null
    fultcosun: Date | null
    cosproun: Decimal | null
    fcosproun: Date | null
    cosunan: Decimal | null
    fcosunan: Date | null
    ultcosunom: Decimal | null
    fultcosunom: Date | null
    cosprounom: Decimal | null
    fcosprounom: Date | null
    cosunanom: Decimal | null
    fcosunanom: Date | null
    tipocosto: string | null
    invfisico: boolean | null
    diasrepo: number | null
    tipoart: string | null
    anulado: boolean | null
    tipoimp: string | null
    compuesto: number | null
    peso: Decimal | null
    volumen: Decimal | null
    medalto: number | null
    medancho: number | null
    medlargo: number | null
  }

  export type MtprofitartCountAggregateOutputType = {
    codart: number
    artdes: number
    fecrec: number
    mseriales: number
    mlote: number
    mgarantia: number
    codlin: number
    codcat: number
    codsubl: number
    codcolor: number
    codbarra: number
    artref: number
    modelo: number
    coment: number
    univenta: number
    unicompra: number
    unirelac: number
    stockact: number
    stockcom: number
    stocklle: number
    stockdes: number
    suniventa: number
    sunicompra: number
    sunirelac: number
    sstockact: number
    sstockcom: number
    sstocklle: number
    sstockdes: number
    precioom: number
    precvta1: number
    fecprecv1: number
    precvta2: number
    fecprecv2: number
    precvta3: number
    fecprecv3: number
    precvta4: number
    fecprecv4: number
    precvta5: number
    fecprecv5: number
    fecdesp5: number
    fechasp5: number
    ultcosun: number
    fultcosun: number
    cosproun: number
    fcosproun: number
    cosunan: number
    fcosunan: number
    ultcosunom: number
    fultcosunom: number
    cosprounom: number
    fcosprounom: number
    cosunanom: number
    fcosunanom: number
    tipocosto: number
    invfisico: number
    diasrepo: number
    tipoart: number
    anulado: number
    tipoimp: number
    compuesto: number
    peso: number
    volumen: number
    medalto: number
    medancho: number
    medlargo: number
    _all: number
  }


  export type MtprofitartAvgAggregateInputType = {
    unirelac?: true
    stockact?: true
    stockcom?: true
    stocklle?: true
    stockdes?: true
    sunirelac?: true
    sstockact?: true
    sstockcom?: true
    sstocklle?: true
    sstockdes?: true
    precvta1?: true
    precvta2?: true
    precvta3?: true
    precvta4?: true
    precvta5?: true
    ultcosun?: true
    cosproun?: true
    cosunan?: true
    ultcosunom?: true
    cosprounom?: true
    cosunanom?: true
    diasrepo?: true
    compuesto?: true
    peso?: true
    volumen?: true
    medalto?: true
    medancho?: true
    medlargo?: true
  }

  export type MtprofitartSumAggregateInputType = {
    unirelac?: true
    stockact?: true
    stockcom?: true
    stocklle?: true
    stockdes?: true
    sunirelac?: true
    sstockact?: true
    sstockcom?: true
    sstocklle?: true
    sstockdes?: true
    precvta1?: true
    precvta2?: true
    precvta3?: true
    precvta4?: true
    precvta5?: true
    ultcosun?: true
    cosproun?: true
    cosunan?: true
    ultcosunom?: true
    cosprounom?: true
    cosunanom?: true
    diasrepo?: true
    compuesto?: true
    peso?: true
    volumen?: true
    medalto?: true
    medancho?: true
    medlargo?: true
  }

  export type MtprofitartMinAggregateInputType = {
    codart?: true
    artdes?: true
    fecrec?: true
    mseriales?: true
    mlote?: true
    mgarantia?: true
    codlin?: true
    codcat?: true
    codsubl?: true
    codcolor?: true
    codbarra?: true
    artref?: true
    modelo?: true
    coment?: true
    univenta?: true
    unicompra?: true
    unirelac?: true
    stockact?: true
    stockcom?: true
    stocklle?: true
    stockdes?: true
    suniventa?: true
    sunicompra?: true
    sunirelac?: true
    sstockact?: true
    sstockcom?: true
    sstocklle?: true
    sstockdes?: true
    precioom?: true
    precvta1?: true
    fecprecv1?: true
    precvta2?: true
    fecprecv2?: true
    precvta3?: true
    fecprecv3?: true
    precvta4?: true
    fecprecv4?: true
    precvta5?: true
    fecprecv5?: true
    fecdesp5?: true
    fechasp5?: true
    ultcosun?: true
    fultcosun?: true
    cosproun?: true
    fcosproun?: true
    cosunan?: true
    fcosunan?: true
    ultcosunom?: true
    fultcosunom?: true
    cosprounom?: true
    fcosprounom?: true
    cosunanom?: true
    fcosunanom?: true
    tipocosto?: true
    invfisico?: true
    diasrepo?: true
    tipoart?: true
    anulado?: true
    tipoimp?: true
    compuesto?: true
    peso?: true
    volumen?: true
    medalto?: true
    medancho?: true
    medlargo?: true
  }

  export type MtprofitartMaxAggregateInputType = {
    codart?: true
    artdes?: true
    fecrec?: true
    mseriales?: true
    mlote?: true
    mgarantia?: true
    codlin?: true
    codcat?: true
    codsubl?: true
    codcolor?: true
    codbarra?: true
    artref?: true
    modelo?: true
    coment?: true
    univenta?: true
    unicompra?: true
    unirelac?: true
    stockact?: true
    stockcom?: true
    stocklle?: true
    stockdes?: true
    suniventa?: true
    sunicompra?: true
    sunirelac?: true
    sstockact?: true
    sstockcom?: true
    sstocklle?: true
    sstockdes?: true
    precioom?: true
    precvta1?: true
    fecprecv1?: true
    precvta2?: true
    fecprecv2?: true
    precvta3?: true
    fecprecv3?: true
    precvta4?: true
    fecprecv4?: true
    precvta5?: true
    fecprecv5?: true
    fecdesp5?: true
    fechasp5?: true
    ultcosun?: true
    fultcosun?: true
    cosproun?: true
    fcosproun?: true
    cosunan?: true
    fcosunan?: true
    ultcosunom?: true
    fultcosunom?: true
    cosprounom?: true
    fcosprounom?: true
    cosunanom?: true
    fcosunanom?: true
    tipocosto?: true
    invfisico?: true
    diasrepo?: true
    tipoart?: true
    anulado?: true
    tipoimp?: true
    compuesto?: true
    peso?: true
    volumen?: true
    medalto?: true
    medancho?: true
    medlargo?: true
  }

  export type MtprofitartCountAggregateInputType = {
    codart?: true
    artdes?: true
    fecrec?: true
    mseriales?: true
    mlote?: true
    mgarantia?: true
    codlin?: true
    codcat?: true
    codsubl?: true
    codcolor?: true
    codbarra?: true
    artref?: true
    modelo?: true
    coment?: true
    univenta?: true
    unicompra?: true
    unirelac?: true
    stockact?: true
    stockcom?: true
    stocklle?: true
    stockdes?: true
    suniventa?: true
    sunicompra?: true
    sunirelac?: true
    sstockact?: true
    sstockcom?: true
    sstocklle?: true
    sstockdes?: true
    precioom?: true
    precvta1?: true
    fecprecv1?: true
    precvta2?: true
    fecprecv2?: true
    precvta3?: true
    fecprecv3?: true
    precvta4?: true
    fecprecv4?: true
    precvta5?: true
    fecprecv5?: true
    fecdesp5?: true
    fechasp5?: true
    ultcosun?: true
    fultcosun?: true
    cosproun?: true
    fcosproun?: true
    cosunan?: true
    fcosunan?: true
    ultcosunom?: true
    fultcosunom?: true
    cosprounom?: true
    fcosprounom?: true
    cosunanom?: true
    fcosunanom?: true
    tipocosto?: true
    invfisico?: true
    diasrepo?: true
    tipoart?: true
    anulado?: true
    tipoimp?: true
    compuesto?: true
    peso?: true
    volumen?: true
    medalto?: true
    medancho?: true
    medlargo?: true
    _all?: true
  }

  export type MtprofitartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mtprofitart to aggregate.
     */
    where?: mtprofitartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mtprofitarts to fetch.
     */
    orderBy?: mtprofitartOrderByWithRelationInput | mtprofitartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mtprofitartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mtprofitarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mtprofitarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mtprofitarts
    **/
    _count?: true | MtprofitartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MtprofitartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MtprofitartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MtprofitartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MtprofitartMaxAggregateInputType
  }

  export type GetMtprofitartAggregateType<T extends MtprofitartAggregateArgs> = {
        [P in keyof T & keyof AggregateMtprofitart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMtprofitart[P]>
      : GetScalarType<T[P], AggregateMtprofitart[P]>
  }




  export type mtprofitartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mtprofitartWhereInput
    orderBy?: mtprofitartOrderByWithAggregationInput | mtprofitartOrderByWithAggregationInput[]
    by: MtprofitartScalarFieldEnum[] | MtprofitartScalarFieldEnum
    having?: mtprofitartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MtprofitartCountAggregateInputType | true
    _avg?: MtprofitartAvgAggregateInputType
    _sum?: MtprofitartSumAggregateInputType
    _min?: MtprofitartMinAggregateInputType
    _max?: MtprofitartMaxAggregateInputType
  }

  export type MtprofitartGroupByOutputType = {
    codart: string
    artdes: string
    fecrec: Date
    mseriales: boolean | null
    mlote: boolean | null
    mgarantia: boolean | null
    codlin: string
    codcat: string
    codsubl: string
    codcolor: string
    codbarra: string | null
    artref: string | null
    modelo: string
    coment: string | null
    univenta: string
    unicompra: string
    unirelac: Decimal
    stockact: number
    stockcom: number
    stocklle: number
    stockdes: number
    suniventa: string
    sunicompra: string
    sunirelac: Decimal
    sstockact: number
    sstockcom: number
    sstocklle: number
    sstockdes: number
    precioom: boolean
    precvta1: Decimal
    fecprecv1: Date | null
    precvta2: Decimal
    fecprecv2: Date | null
    precvta3: Decimal
    fecprecv3: Date | null
    precvta4: Decimal
    fecprecv4: Date | null
    precvta5: Decimal
    fecprecv5: Date | null
    fecdesp5: Date
    fechasp5: Date
    ultcosun: Decimal
    fultcosun: Date | null
    cosproun: Decimal
    fcosproun: Date | null
    cosunan: Decimal
    fcosunan: Date | null
    ultcosunom: Decimal
    fultcosunom: Date | null
    cosprounom: Decimal
    fcosprounom: Date | null
    cosunanom: Decimal
    fcosunanom: Date | null
    tipocosto: string
    invfisico: boolean
    diasrepo: number
    tipoart: string
    anulado: boolean
    tipoimp: string
    compuesto: number
    peso: Decimal
    volumen: Decimal
    medalto: number
    medancho: number
    medlargo: number
    _count: MtprofitartCountAggregateOutputType | null
    _avg: MtprofitartAvgAggregateOutputType | null
    _sum: MtprofitartSumAggregateOutputType | null
    _min: MtprofitartMinAggregateOutputType | null
    _max: MtprofitartMaxAggregateOutputType | null
  }

  type GetMtprofitartGroupByPayload<T extends mtprofitartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MtprofitartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MtprofitartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MtprofitartGroupByOutputType[P]>
            : GetScalarType<T[P], MtprofitartGroupByOutputType[P]>
        }
      >
    >


  export type mtprofitartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codart?: boolean
    artdes?: boolean
    fecrec?: boolean
    mseriales?: boolean
    mlote?: boolean
    mgarantia?: boolean
    codlin?: boolean
    codcat?: boolean
    codsubl?: boolean
    codcolor?: boolean
    codbarra?: boolean
    artref?: boolean
    modelo?: boolean
    coment?: boolean
    univenta?: boolean
    unicompra?: boolean
    unirelac?: boolean
    stockact?: boolean
    stockcom?: boolean
    stocklle?: boolean
    stockdes?: boolean
    suniventa?: boolean
    sunicompra?: boolean
    sunirelac?: boolean
    sstockact?: boolean
    sstockcom?: boolean
    sstocklle?: boolean
    sstockdes?: boolean
    precioom?: boolean
    precvta1?: boolean
    fecprecv1?: boolean
    precvta2?: boolean
    fecprecv2?: boolean
    precvta3?: boolean
    fecprecv3?: boolean
    precvta4?: boolean
    fecprecv4?: boolean
    precvta5?: boolean
    fecprecv5?: boolean
    fecdesp5?: boolean
    fechasp5?: boolean
    ultcosun?: boolean
    fultcosun?: boolean
    cosproun?: boolean
    fcosproun?: boolean
    cosunan?: boolean
    fcosunan?: boolean
    ultcosunom?: boolean
    fultcosunom?: boolean
    cosprounom?: boolean
    fcosprounom?: boolean
    cosunanom?: boolean
    fcosunanom?: boolean
    tipocosto?: boolean
    invfisico?: boolean
    diasrepo?: boolean
    tipoart?: boolean
    anulado?: boolean
    tipoimp?: boolean
    compuesto?: boolean
    peso?: boolean
    volumen?: boolean
    medalto?: boolean
    medancho?: boolean
    medlargo?: boolean
  }, ExtArgs["result"]["mtprofitart"]>



  export type mtprofitartSelectScalar = {
    codart?: boolean
    artdes?: boolean
    fecrec?: boolean
    mseriales?: boolean
    mlote?: boolean
    mgarantia?: boolean
    codlin?: boolean
    codcat?: boolean
    codsubl?: boolean
    codcolor?: boolean
    codbarra?: boolean
    artref?: boolean
    modelo?: boolean
    coment?: boolean
    univenta?: boolean
    unicompra?: boolean
    unirelac?: boolean
    stockact?: boolean
    stockcom?: boolean
    stocklle?: boolean
    stockdes?: boolean
    suniventa?: boolean
    sunicompra?: boolean
    sunirelac?: boolean
    sstockact?: boolean
    sstockcom?: boolean
    sstocklle?: boolean
    sstockdes?: boolean
    precioom?: boolean
    precvta1?: boolean
    fecprecv1?: boolean
    precvta2?: boolean
    fecprecv2?: boolean
    precvta3?: boolean
    fecprecv3?: boolean
    precvta4?: boolean
    fecprecv4?: boolean
    precvta5?: boolean
    fecprecv5?: boolean
    fecdesp5?: boolean
    fechasp5?: boolean
    ultcosun?: boolean
    fultcosun?: boolean
    cosproun?: boolean
    fcosproun?: boolean
    cosunan?: boolean
    fcosunan?: boolean
    ultcosunom?: boolean
    fultcosunom?: boolean
    cosprounom?: boolean
    fcosprounom?: boolean
    cosunanom?: boolean
    fcosunanom?: boolean
    tipocosto?: boolean
    invfisico?: boolean
    diasrepo?: boolean
    tipoart?: boolean
    anulado?: boolean
    tipoimp?: boolean
    compuesto?: boolean
    peso?: boolean
    volumen?: boolean
    medalto?: boolean
    medancho?: boolean
    medlargo?: boolean
  }

  export type mtprofitartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codart" | "artdes" | "fecrec" | "mseriales" | "mlote" | "mgarantia" | "codlin" | "codcat" | "codsubl" | "codcolor" | "codbarra" | "artref" | "modelo" | "coment" | "univenta" | "unicompra" | "unirelac" | "stockact" | "stockcom" | "stocklle" | "stockdes" | "suniventa" | "sunicompra" | "sunirelac" | "sstockact" | "sstockcom" | "sstocklle" | "sstockdes" | "precioom" | "precvta1" | "fecprecv1" | "precvta2" | "fecprecv2" | "precvta3" | "fecprecv3" | "precvta4" | "fecprecv4" | "precvta5" | "fecprecv5" | "fecdesp5" | "fechasp5" | "ultcosun" | "fultcosun" | "cosproun" | "fcosproun" | "cosunan" | "fcosunan" | "ultcosunom" | "fultcosunom" | "cosprounom" | "fcosprounom" | "cosunanom" | "fcosunanom" | "tipocosto" | "invfisico" | "diasrepo" | "tipoart" | "anulado" | "tipoimp" | "compuesto" | "peso" | "volumen" | "medalto" | "medancho" | "medlargo", ExtArgs["result"]["mtprofitart"]>

  export type $mtprofitartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mtprofitart"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      codart: string
      artdes: string
      fecrec: Date
      mseriales: boolean | null
      mlote: boolean | null
      mgarantia: boolean | null
      codlin: string
      codcat: string
      codsubl: string
      codcolor: string
      codbarra: string | null
      artref: string | null
      modelo: string
      coment: string | null
      univenta: string
      unicompra: string
      unirelac: Prisma.Decimal
      stockact: number
      stockcom: number
      stocklle: number
      stockdes: number
      suniventa: string
      sunicompra: string
      sunirelac: Prisma.Decimal
      sstockact: number
      sstockcom: number
      sstocklle: number
      sstockdes: number
      precioom: boolean
      precvta1: Prisma.Decimal
      fecprecv1: Date | null
      precvta2: Prisma.Decimal
      fecprecv2: Date | null
      precvta3: Prisma.Decimal
      fecprecv3: Date | null
      precvta4: Prisma.Decimal
      fecprecv4: Date | null
      precvta5: Prisma.Decimal
      fecprecv5: Date | null
      fecdesp5: Date
      fechasp5: Date
      ultcosun: Prisma.Decimal
      fultcosun: Date | null
      cosproun: Prisma.Decimal
      fcosproun: Date | null
      cosunan: Prisma.Decimal
      fcosunan: Date | null
      ultcosunom: Prisma.Decimal
      fultcosunom: Date | null
      cosprounom: Prisma.Decimal
      fcosprounom: Date | null
      cosunanom: Prisma.Decimal
      fcosunanom: Date | null
      tipocosto: string
      invfisico: boolean
      diasrepo: number
      tipoart: string
      anulado: boolean
      tipoimp: string
      compuesto: number
      peso: Prisma.Decimal
      volumen: Prisma.Decimal
      medalto: number
      medancho: number
      medlargo: number
    }, ExtArgs["result"]["mtprofitart"]>
    composites: {}
  }

  type mtprofitartGetPayload<S extends boolean | null | undefined | mtprofitartDefaultArgs> = $Result.GetResult<Prisma.$mtprofitartPayload, S>

  type mtprofitartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mtprofitartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MtprofitartCountAggregateInputType | true
    }

  export interface mtprofitartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mtprofitart'], meta: { name: 'mtprofitart' } }
    /**
     * Find zero or one Mtprofitart that matches the filter.
     * @param {mtprofitartFindUniqueArgs} args - Arguments to find a Mtprofitart
     * @example
     * // Get one Mtprofitart
     * const mtprofitart = await prisma.mtprofitart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mtprofitartFindUniqueArgs>(args: SelectSubset<T, mtprofitartFindUniqueArgs<ExtArgs>>): Prisma__mtprofitartClient<$Result.GetResult<Prisma.$mtprofitartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mtprofitart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mtprofitartFindUniqueOrThrowArgs} args - Arguments to find a Mtprofitart
     * @example
     * // Get one Mtprofitart
     * const mtprofitart = await prisma.mtprofitart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mtprofitartFindUniqueOrThrowArgs>(args: SelectSubset<T, mtprofitartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mtprofitartClient<$Result.GetResult<Prisma.$mtprofitartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mtprofitart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtprofitartFindFirstArgs} args - Arguments to find a Mtprofitart
     * @example
     * // Get one Mtprofitart
     * const mtprofitart = await prisma.mtprofitart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mtprofitartFindFirstArgs>(args?: SelectSubset<T, mtprofitartFindFirstArgs<ExtArgs>>): Prisma__mtprofitartClient<$Result.GetResult<Prisma.$mtprofitartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mtprofitart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtprofitartFindFirstOrThrowArgs} args - Arguments to find a Mtprofitart
     * @example
     * // Get one Mtprofitart
     * const mtprofitart = await prisma.mtprofitart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mtprofitartFindFirstOrThrowArgs>(args?: SelectSubset<T, mtprofitartFindFirstOrThrowArgs<ExtArgs>>): Prisma__mtprofitartClient<$Result.GetResult<Prisma.$mtprofitartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mtprofitarts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtprofitartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mtprofitarts
     * const mtprofitarts = await prisma.mtprofitart.findMany()
     * 
     * // Get first 10 Mtprofitarts
     * const mtprofitarts = await prisma.mtprofitart.findMany({ take: 10 })
     * 
     * // Only select the `codart`
     * const mtprofitartWithCodartOnly = await prisma.mtprofitart.findMany({ select: { codart: true } })
     * 
     */
    findMany<T extends mtprofitartFindManyArgs>(args?: SelectSubset<T, mtprofitartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mtprofitartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mtprofitart.
     * @param {mtprofitartCreateArgs} args - Arguments to create a Mtprofitart.
     * @example
     * // Create one Mtprofitart
     * const Mtprofitart = await prisma.mtprofitart.create({
     *   data: {
     *     // ... data to create a Mtprofitart
     *   }
     * })
     * 
     */
    create<T extends mtprofitartCreateArgs>(args: SelectSubset<T, mtprofitartCreateArgs<ExtArgs>>): Prisma__mtprofitartClient<$Result.GetResult<Prisma.$mtprofitartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mtprofitarts.
     * @param {mtprofitartCreateManyArgs} args - Arguments to create many Mtprofitarts.
     * @example
     * // Create many Mtprofitarts
     * const mtprofitart = await prisma.mtprofitart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mtprofitartCreateManyArgs>(args?: SelectSubset<T, mtprofitartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mtprofitart.
     * @param {mtprofitartDeleteArgs} args - Arguments to delete one Mtprofitart.
     * @example
     * // Delete one Mtprofitart
     * const Mtprofitart = await prisma.mtprofitart.delete({
     *   where: {
     *     // ... filter to delete one Mtprofitart
     *   }
     * })
     * 
     */
    delete<T extends mtprofitartDeleteArgs>(args: SelectSubset<T, mtprofitartDeleteArgs<ExtArgs>>): Prisma__mtprofitartClient<$Result.GetResult<Prisma.$mtprofitartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mtprofitart.
     * @param {mtprofitartUpdateArgs} args - Arguments to update one Mtprofitart.
     * @example
     * // Update one Mtprofitart
     * const mtprofitart = await prisma.mtprofitart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mtprofitartUpdateArgs>(args: SelectSubset<T, mtprofitartUpdateArgs<ExtArgs>>): Prisma__mtprofitartClient<$Result.GetResult<Prisma.$mtprofitartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mtprofitarts.
     * @param {mtprofitartDeleteManyArgs} args - Arguments to filter Mtprofitarts to delete.
     * @example
     * // Delete a few Mtprofitarts
     * const { count } = await prisma.mtprofitart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mtprofitartDeleteManyArgs>(args?: SelectSubset<T, mtprofitartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mtprofitarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtprofitartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mtprofitarts
     * const mtprofitart = await prisma.mtprofitart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mtprofitartUpdateManyArgs>(args: SelectSubset<T, mtprofitartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mtprofitart.
     * @param {mtprofitartUpsertArgs} args - Arguments to update or create a Mtprofitart.
     * @example
     * // Update or create a Mtprofitart
     * const mtprofitart = await prisma.mtprofitart.upsert({
     *   create: {
     *     // ... data to create a Mtprofitart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mtprofitart we want to update
     *   }
     * })
     */
    upsert<T extends mtprofitartUpsertArgs>(args: SelectSubset<T, mtprofitartUpsertArgs<ExtArgs>>): Prisma__mtprofitartClient<$Result.GetResult<Prisma.$mtprofitartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mtprofitarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtprofitartCountArgs} args - Arguments to filter Mtprofitarts to count.
     * @example
     * // Count the number of Mtprofitarts
     * const count = await prisma.mtprofitart.count({
     *   where: {
     *     // ... the filter for the Mtprofitarts we want to count
     *   }
     * })
    **/
    count<T extends mtprofitartCountArgs>(
      args?: Subset<T, mtprofitartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MtprofitartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mtprofitart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MtprofitartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MtprofitartAggregateArgs>(args: Subset<T, MtprofitartAggregateArgs>): Prisma.PrismaPromise<GetMtprofitartAggregateType<T>>

    /**
     * Group by Mtprofitart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mtprofitartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mtprofitartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mtprofitartGroupByArgs['orderBy'] }
        : { orderBy?: mtprofitartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mtprofitartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMtprofitartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mtprofitart model
   */
  readonly fields: mtprofitartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mtprofitart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mtprofitartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mtprofitart model
   */
  interface mtprofitartFieldRefs {
    readonly codart: FieldRef<"mtprofitart", 'String'>
    readonly artdes: FieldRef<"mtprofitart", 'String'>
    readonly fecrec: FieldRef<"mtprofitart", 'DateTime'>
    readonly mseriales: FieldRef<"mtprofitart", 'Boolean'>
    readonly mlote: FieldRef<"mtprofitart", 'Boolean'>
    readonly mgarantia: FieldRef<"mtprofitart", 'Boolean'>
    readonly codlin: FieldRef<"mtprofitart", 'String'>
    readonly codcat: FieldRef<"mtprofitart", 'String'>
    readonly codsubl: FieldRef<"mtprofitart", 'String'>
    readonly codcolor: FieldRef<"mtprofitart", 'String'>
    readonly codbarra: FieldRef<"mtprofitart", 'String'>
    readonly artref: FieldRef<"mtprofitart", 'String'>
    readonly modelo: FieldRef<"mtprofitart", 'String'>
    readonly coment: FieldRef<"mtprofitart", 'String'>
    readonly univenta: FieldRef<"mtprofitart", 'String'>
    readonly unicompra: FieldRef<"mtprofitart", 'String'>
    readonly unirelac: FieldRef<"mtprofitart", 'Decimal'>
    readonly stockact: FieldRef<"mtprofitart", 'Int'>
    readonly stockcom: FieldRef<"mtprofitart", 'Int'>
    readonly stocklle: FieldRef<"mtprofitart", 'Int'>
    readonly stockdes: FieldRef<"mtprofitart", 'Int'>
    readonly suniventa: FieldRef<"mtprofitart", 'String'>
    readonly sunicompra: FieldRef<"mtprofitart", 'String'>
    readonly sunirelac: FieldRef<"mtprofitart", 'Decimal'>
    readonly sstockact: FieldRef<"mtprofitart", 'Int'>
    readonly sstockcom: FieldRef<"mtprofitart", 'Int'>
    readonly sstocklle: FieldRef<"mtprofitart", 'Int'>
    readonly sstockdes: FieldRef<"mtprofitart", 'Int'>
    readonly precioom: FieldRef<"mtprofitart", 'Boolean'>
    readonly precvta1: FieldRef<"mtprofitart", 'Decimal'>
    readonly fecprecv1: FieldRef<"mtprofitart", 'DateTime'>
    readonly precvta2: FieldRef<"mtprofitart", 'Decimal'>
    readonly fecprecv2: FieldRef<"mtprofitart", 'DateTime'>
    readonly precvta3: FieldRef<"mtprofitart", 'Decimal'>
    readonly fecprecv3: FieldRef<"mtprofitart", 'DateTime'>
    readonly precvta4: FieldRef<"mtprofitart", 'Decimal'>
    readonly fecprecv4: FieldRef<"mtprofitart", 'DateTime'>
    readonly precvta5: FieldRef<"mtprofitart", 'Decimal'>
    readonly fecprecv5: FieldRef<"mtprofitart", 'DateTime'>
    readonly fecdesp5: FieldRef<"mtprofitart", 'DateTime'>
    readonly fechasp5: FieldRef<"mtprofitart", 'DateTime'>
    readonly ultcosun: FieldRef<"mtprofitart", 'Decimal'>
    readonly fultcosun: FieldRef<"mtprofitart", 'DateTime'>
    readonly cosproun: FieldRef<"mtprofitart", 'Decimal'>
    readonly fcosproun: FieldRef<"mtprofitart", 'DateTime'>
    readonly cosunan: FieldRef<"mtprofitart", 'Decimal'>
    readonly fcosunan: FieldRef<"mtprofitart", 'DateTime'>
    readonly ultcosunom: FieldRef<"mtprofitart", 'Decimal'>
    readonly fultcosunom: FieldRef<"mtprofitart", 'DateTime'>
    readonly cosprounom: FieldRef<"mtprofitart", 'Decimal'>
    readonly fcosprounom: FieldRef<"mtprofitart", 'DateTime'>
    readonly cosunanom: FieldRef<"mtprofitart", 'Decimal'>
    readonly fcosunanom: FieldRef<"mtprofitart", 'DateTime'>
    readonly tipocosto: FieldRef<"mtprofitart", 'String'>
    readonly invfisico: FieldRef<"mtprofitart", 'Boolean'>
    readonly diasrepo: FieldRef<"mtprofitart", 'Int'>
    readonly tipoart: FieldRef<"mtprofitart", 'String'>
    readonly anulado: FieldRef<"mtprofitart", 'Boolean'>
    readonly tipoimp: FieldRef<"mtprofitart", 'String'>
    readonly compuesto: FieldRef<"mtprofitart", 'Int'>
    readonly peso: FieldRef<"mtprofitart", 'Decimal'>
    readonly volumen: FieldRef<"mtprofitart", 'Decimal'>
    readonly medalto: FieldRef<"mtprofitart", 'Int'>
    readonly medancho: FieldRef<"mtprofitart", 'Int'>
    readonly medlargo: FieldRef<"mtprofitart", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mtprofitart findUnique
   */
  export type mtprofitartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtprofitart
     */
    select?: mtprofitartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtprofitart
     */
    omit?: mtprofitartOmit<ExtArgs> | null
    /**
     * Filter, which mtprofitart to fetch.
     */
    where: mtprofitartWhereUniqueInput
  }

  /**
   * mtprofitart findUniqueOrThrow
   */
  export type mtprofitartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtprofitart
     */
    select?: mtprofitartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtprofitart
     */
    omit?: mtprofitartOmit<ExtArgs> | null
    /**
     * Filter, which mtprofitart to fetch.
     */
    where: mtprofitartWhereUniqueInput
  }

  /**
   * mtprofitart findFirst
   */
  export type mtprofitartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtprofitart
     */
    select?: mtprofitartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtprofitart
     */
    omit?: mtprofitartOmit<ExtArgs> | null
    /**
     * Filter, which mtprofitart to fetch.
     */
    where?: mtprofitartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mtprofitarts to fetch.
     */
    orderBy?: mtprofitartOrderByWithRelationInput | mtprofitartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mtprofitarts.
     */
    cursor?: mtprofitartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mtprofitarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mtprofitarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mtprofitarts.
     */
    distinct?: MtprofitartScalarFieldEnum | MtprofitartScalarFieldEnum[]
  }

  /**
   * mtprofitart findFirstOrThrow
   */
  export type mtprofitartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtprofitart
     */
    select?: mtprofitartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtprofitart
     */
    omit?: mtprofitartOmit<ExtArgs> | null
    /**
     * Filter, which mtprofitart to fetch.
     */
    where?: mtprofitartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mtprofitarts to fetch.
     */
    orderBy?: mtprofitartOrderByWithRelationInput | mtprofitartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mtprofitarts.
     */
    cursor?: mtprofitartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mtprofitarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mtprofitarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mtprofitarts.
     */
    distinct?: MtprofitartScalarFieldEnum | MtprofitartScalarFieldEnum[]
  }

  /**
   * mtprofitart findMany
   */
  export type mtprofitartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtprofitart
     */
    select?: mtprofitartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtprofitart
     */
    omit?: mtprofitartOmit<ExtArgs> | null
    /**
     * Filter, which mtprofitarts to fetch.
     */
    where?: mtprofitartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mtprofitarts to fetch.
     */
    orderBy?: mtprofitartOrderByWithRelationInput | mtprofitartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mtprofitarts.
     */
    cursor?: mtprofitartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mtprofitarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mtprofitarts.
     */
    skip?: number
    distinct?: MtprofitartScalarFieldEnum | MtprofitartScalarFieldEnum[]
  }

  /**
   * mtprofitart create
   */
  export type mtprofitartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtprofitart
     */
    select?: mtprofitartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtprofitart
     */
    omit?: mtprofitartOmit<ExtArgs> | null
    /**
     * The data needed to create a mtprofitart.
     */
    data: XOR<mtprofitartCreateInput, mtprofitartUncheckedCreateInput>
  }

  /**
   * mtprofitart createMany
   */
  export type mtprofitartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mtprofitarts.
     */
    data: mtprofitartCreateManyInput | mtprofitartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mtprofitart update
   */
  export type mtprofitartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtprofitart
     */
    select?: mtprofitartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtprofitart
     */
    omit?: mtprofitartOmit<ExtArgs> | null
    /**
     * The data needed to update a mtprofitart.
     */
    data: XOR<mtprofitartUpdateInput, mtprofitartUncheckedUpdateInput>
    /**
     * Choose, which mtprofitart to update.
     */
    where: mtprofitartWhereUniqueInput
  }

  /**
   * mtprofitart updateMany
   */
  export type mtprofitartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mtprofitarts.
     */
    data: XOR<mtprofitartUpdateManyMutationInput, mtprofitartUncheckedUpdateManyInput>
    /**
     * Filter which mtprofitarts to update
     */
    where?: mtprofitartWhereInput
    /**
     * Limit how many mtprofitarts to update.
     */
    limit?: number
  }

  /**
   * mtprofitart upsert
   */
  export type mtprofitartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtprofitart
     */
    select?: mtprofitartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtprofitart
     */
    omit?: mtprofitartOmit<ExtArgs> | null
    /**
     * The filter to search for the mtprofitart to update in case it exists.
     */
    where: mtprofitartWhereUniqueInput
    /**
     * In case the mtprofitart found by the `where` argument doesn't exist, create a new mtprofitart with this data.
     */
    create: XOR<mtprofitartCreateInput, mtprofitartUncheckedCreateInput>
    /**
     * In case the mtprofitart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mtprofitartUpdateInput, mtprofitartUncheckedUpdateInput>
  }

  /**
   * mtprofitart delete
   */
  export type mtprofitartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtprofitart
     */
    select?: mtprofitartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtprofitart
     */
    omit?: mtprofitartOmit<ExtArgs> | null
    /**
     * Filter which mtprofitart to delete.
     */
    where: mtprofitartWhereUniqueInput
  }

  /**
   * mtprofitart deleteMany
   */
  export type mtprofitartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mtprofitarts to delete
     */
    where?: mtprofitartWhereInput
    /**
     * Limit how many mtprofitarts to delete.
     */
    limit?: number
  }

  /**
   * mtprofitart without action
   */
  export type mtprofitartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mtprofitart
     */
    select?: mtprofitartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mtprofitart
     */
    omit?: mtprofitartOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CbdevolucionesScalarFieldEnum: {
    devonum: 'devonum',
    fecha: 'fecha',
    estatus: 'estatus',
    codcli: 'codcli',
    motivo: 'motivo',
    tipo: 'tipo',
    chofer: 'chofer'
  };

  export type CbdevolucionesScalarFieldEnum = (typeof CbdevolucionesScalarFieldEnum)[keyof typeof CbdevolucionesScalarFieldEnum]


  export const CbplanpagosScalarFieldEnum: {
    planpagonumero: 'planpagonumero',
    unidad: 'unidad',
    empresa: 'empresa',
    fechapagoautorizada: 'fechapagoautorizada',
    descripcionplan: 'descripcionplan',
    fechaautorizadopor: 'fechaautorizadopor',
    autorizadopor: 'autorizadopor',
    totalnetobsd: 'totalnetobsd',
    totalnetousd: 'totalnetousd',
    totalsaldobsd: 'totalsaldobsd',
    totalsaldousd: 'totalsaldousd',
    totalautorizadobsd: 'totalautorizadobsd',
    totalautorizadousd: 'totalautorizadousd',
    totalpagadobsd: 'totalpagadobsd',
    totalpagadousd: 'totalpagadousd',
    totalxpagarbsd: 'totalxpagarbsd',
    totalxpagarusd: 'totalxpagarusd',
    generadotxt: 'generadotxt',
    conciliadopago: 'conciliadopago',
    owneruser: 'owneruser'
  };

  export type CbplanpagosScalarFieldEnum = (typeof CbplanpagosScalarFieldEnum)[keyof typeof CbplanpagosScalarFieldEnum]


  export const CbsolicimatScalarFieldEnum: {
    solicitudnumero: 'solicitudnumero',
    empresa: 'empresa',
    codigoobra: 'codigoobra',
    descripcionobra: 'descripcionobra',
    numerocontrol: 'numerocontrol',
    solicitanteuser: 'solicitanteuser',
    solicitantecodigo: 'solicitantecodigo',
    fechasolicitud: 'fechasolicitud',
    fechautilizacion: 'fechautilizacion',
    observacion: 'observacion',
    actividad: 'actividad',
    direccionentrega: 'direccionentrega',
    fecharevisado: 'fecharevisado',
    revisadopor: 'revisadopor',
    registradopor: 'registradopor',
    revisado: 'revisado',
    procesado: 'procesado',
    anulado: 'anulado'
  };

  export type CbsolicimatScalarFieldEnum = (typeof CbsolicimatScalarFieldEnum)[keyof typeof CbsolicimatScalarFieldEnum]


  export const ClbancoprovScalarFieldEnum: {
    numerocuenta: 'numerocuenta',
    beneficiario: 'beneficiario',
    titularcuenta: 'titularcuenta',
    cuentabanco: 'cuentabanco',
    banco: 'banco',
    codigobanco: 'codigobanco',
    codigoswift: 'codigoswift',
    tipocuenta: 'tipocuenta',
    rifproveedor: 'rifproveedor'
  };

  export type ClbancoprovScalarFieldEnum = (typeof ClbancoprovScalarFieldEnum)[keyof typeof ClbancoprovScalarFieldEnum]


  export const ClbancoswiftScalarFieldEnum: {
    codigobanco: 'codigobanco',
    codigoswift: 'codigoswift',
    nombrecorto: 'nombrecorto',
    tipocuenta: 'tipocuenta'
  };

  export type ClbancoswiftScalarFieldEnum = (typeof ClbancoswiftScalarFieldEnum)[keyof typeof ClbancoswiftScalarFieldEnum]


  export const ClcategoriaScalarFieldEnum: {
    codcat: 'codcat',
    catdes: 'catdes'
  };

  export type ClcategoriaScalarFieldEnum = (typeof ClcategoriaScalarFieldEnum)[keyof typeof ClcategoriaScalarFieldEnum]


  export const CltransporteScalarFieldEnum: {
    codtran: 'codtran',
    trandes: 'trandes',
    chofer: 'chofer'
  };

  export type CltransporteScalarFieldEnum = (typeof CltransporteScalarFieldEnum)[keyof typeof CltransporteScalarFieldEnum]


  export const ClzonasScalarFieldEnum: {
    codzon: 'codzon',
    zondes: 'zondes'
  };

  export type ClzonasScalarFieldEnum = (typeof ClzonasScalarFieldEnum)[keyof typeof ClzonasScalarFieldEnum]


  export const DtdevolucionScalarFieldEnum: {
    devnum: 'devnum',
    estatus: 'estatus',
    comentario: 'comentario',
    descrip: 'descrip',
    saldo: 'saldo',
    fecemis: 'fecemis',
    fecvenc: 'fecvenc',
    codcli: 'codcli',
    codven: 'codven',
    codtran: 'codtran'
  };

  export type DtdevolucionScalarFieldEnum = (typeof DtdevolucionScalarFieldEnum)[keyof typeof DtdevolucionScalarFieldEnum]


  export const DtdevolucionesScalarFieldEnum: {
    itemnum: 'itemnum',
    devonum: 'devonum',
    codart: 'codart',
    serial: 'serial',
    descripcion: 'descripcion',
    cantidad: 'cantidad'
  };

  export type DtdevolucionesScalarFieldEnum = (typeof DtdevolucionesScalarFieldEnum)[keyof typeof DtdevolucionesScalarFieldEnum]


  export const HsplanpagosScalarFieldEnum: {
    unidad: 'unidad',
    empresa: 'empresa',
    tipodocumento: 'tipodocumento',
    numerodocumento: 'numerodocumento',
    codigobeneficiario: 'codigobeneficiario',
    beneficiario: 'beneficiario',
    cuentabanco: 'cuentabanco',
    banco: 'banco',
    rifproveedor: 'rifproveedor',
    tipoproveedor: 'tipoproveedor',
    monedaproveedor: 'monedaproveedor',
    autorizadopagar: 'autorizadopagar',
    fechaemision: 'fechaemision',
    fechavencimiento: 'fechavencimiento',
    fecharegistro: 'fecharegistro',
    registradopor: 'registradopor',
    numerofactura: 'numerofactura',
    observacion: 'observacion',
    tasacambio: 'tasacambio',
    moneda: 'moneda',
    montoneto: 'montoneto',
    montosaldo: 'montosaldo',
    clasegasto: 'clasegasto',
    owneruser: 'owneruser'
  };

  export type HsplanpagosScalarFieldEnum = (typeof HsplanpagosScalarFieldEnum)[keyof typeof HsplanpagosScalarFieldEnum]


  export const MetasScalarFieldEnum: {
    anio: 'anio',
    mes: 'mes',
    codven: 'codven',
    codart: 'codart',
    asignado: 'asignado',
    utilizado: 'utilizado'
  };

  export type MetasScalarFieldEnum = (typeof MetasScalarFieldEnum)[keyof typeof MetasScalarFieldEnum]


  export const MtclientesScalarFieldEnum: {
    codcli: 'codcli',
    clides: 'clides',
    dirfiscal: 'dirfiscal',
    telefonos: 'telefonos',
    comentario: 'comentario',
    contacto: 'contacto',
    fecreg: 'fecreg',
    fecultvta: 'fecultvta',
    netoultvta: 'netoultvta',
    montocred: 'montocred',
    diascred: 'diascred',
    descppago: 'descppago',
    codzon: 'codzon',
    codseg: 'codseg',
    codven: 'codven',
    descglob: 'descglob',
    direntrega: 'direntrega',
    numrif: 'numrif',
    tipocli: 'tipocli',
    tipocon: 'tipocon',
    email: 'email',
    ciudad: 'ciudad',
    activo: 'activo',
    autorizado: 'autorizado',
    credito: 'credito',
    saldo: 'saldo'
  };

  export type MtclientesScalarFieldEnum = (typeof MtclientesScalarFieldEnum)[keyof typeof MtclientesScalarFieldEnum]


  export const MtprofitartScalarFieldEnum: {
    codart: 'codart',
    artdes: 'artdes',
    fecrec: 'fecrec',
    mseriales: 'mseriales',
    mlote: 'mlote',
    mgarantia: 'mgarantia',
    codlin: 'codlin',
    codcat: 'codcat',
    codsubl: 'codsubl',
    codcolor: 'codcolor',
    codbarra: 'codbarra',
    artref: 'artref',
    modelo: 'modelo',
    coment: 'coment',
    univenta: 'univenta',
    unicompra: 'unicompra',
    unirelac: 'unirelac',
    stockact: 'stockact',
    stockcom: 'stockcom',
    stocklle: 'stocklle',
    stockdes: 'stockdes',
    suniventa: 'suniventa',
    sunicompra: 'sunicompra',
    sunirelac: 'sunirelac',
    sstockact: 'sstockact',
    sstockcom: 'sstockcom',
    sstocklle: 'sstocklle',
    sstockdes: 'sstockdes',
    precioom: 'precioom',
    precvta1: 'precvta1',
    fecprecv1: 'fecprecv1',
    precvta2: 'precvta2',
    fecprecv2: 'fecprecv2',
    precvta3: 'precvta3',
    fecprecv3: 'fecprecv3',
    precvta4: 'precvta4',
    fecprecv4: 'fecprecv4',
    precvta5: 'precvta5',
    fecprecv5: 'fecprecv5',
    fecdesp5: 'fecdesp5',
    fechasp5: 'fechasp5',
    ultcosun: 'ultcosun',
    fultcosun: 'fultcosun',
    cosproun: 'cosproun',
    fcosproun: 'fcosproun',
    cosunan: 'cosunan',
    fcosunan: 'fcosunan',
    ultcosunom: 'ultcosunom',
    fultcosunom: 'fultcosunom',
    cosprounom: 'cosprounom',
    fcosprounom: 'fcosprounom',
    cosunanom: 'cosunanom',
    fcosunanom: 'fcosunanom',
    tipocosto: 'tipocosto',
    invfisico: 'invfisico',
    diasrepo: 'diasrepo',
    tipoart: 'tipoart',
    anulado: 'anulado',
    tipoimp: 'tipoimp',
    compuesto: 'compuesto',
    peso: 'peso',
    volumen: 'volumen',
    medalto: 'medalto',
    medancho: 'medancho',
    medlargo: 'medlargo'
  };

  export type MtprofitartScalarFieldEnum = (typeof MtprofitartScalarFieldEnum)[keyof typeof MtprofitartScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const cbdevolucionesOrderByRelevanceFieldEnum: {
    codcli: 'codcli',
    motivo: 'motivo',
    chofer: 'chofer'
  };

  export type cbdevolucionesOrderByRelevanceFieldEnum = (typeof cbdevolucionesOrderByRelevanceFieldEnum)[keyof typeof cbdevolucionesOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const cbplanpagosOrderByRelevanceFieldEnum: {
    unidad: 'unidad',
    empresa: 'empresa',
    descripcionplan: 'descripcionplan',
    autorizadopor: 'autorizadopor'
  };

  export type cbplanpagosOrderByRelevanceFieldEnum = (typeof cbplanpagosOrderByRelevanceFieldEnum)[keyof typeof cbplanpagosOrderByRelevanceFieldEnum]


  export const cbsolicimatOrderByRelevanceFieldEnum: {
    empresa: 'empresa',
    codigoobra: 'codigoobra',
    descripcionobra: 'descripcionobra',
    solicitanteuser: 'solicitanteuser',
    solicitantecodigo: 'solicitantecodigo',
    observacion: 'observacion',
    actividad: 'actividad',
    direccionentrega: 'direccionentrega',
    revisadopor: 'revisadopor',
    registradopor: 'registradopor'
  };

  export type cbsolicimatOrderByRelevanceFieldEnum = (typeof cbsolicimatOrderByRelevanceFieldEnum)[keyof typeof cbsolicimatOrderByRelevanceFieldEnum]


  export const clbancoprovOrderByRelevanceFieldEnum: {
    beneficiario: 'beneficiario',
    titularcuenta: 'titularcuenta',
    cuentabanco: 'cuentabanco',
    banco: 'banco',
    codigobanco: 'codigobanco',
    codigoswift: 'codigoswift',
    tipocuenta: 'tipocuenta',
    rifproveedor: 'rifproveedor'
  };

  export type clbancoprovOrderByRelevanceFieldEnum = (typeof clbancoprovOrderByRelevanceFieldEnum)[keyof typeof clbancoprovOrderByRelevanceFieldEnum]


  export const clbancoswiftOrderByRelevanceFieldEnum: {
    codigobanco: 'codigobanco',
    codigoswift: 'codigoswift',
    nombrecorto: 'nombrecorto',
    tipocuenta: 'tipocuenta'
  };

  export type clbancoswiftOrderByRelevanceFieldEnum = (typeof clbancoswiftOrderByRelevanceFieldEnum)[keyof typeof clbancoswiftOrderByRelevanceFieldEnum]


  export const clcategoriaOrderByRelevanceFieldEnum: {
    codcat: 'codcat',
    catdes: 'catdes'
  };

  export type clcategoriaOrderByRelevanceFieldEnum = (typeof clcategoriaOrderByRelevanceFieldEnum)[keyof typeof clcategoriaOrderByRelevanceFieldEnum]


  export const cltransporteOrderByRelevanceFieldEnum: {
    codtran: 'codtran',
    trandes: 'trandes',
    chofer: 'chofer'
  };

  export type cltransporteOrderByRelevanceFieldEnum = (typeof cltransporteOrderByRelevanceFieldEnum)[keyof typeof cltransporteOrderByRelevanceFieldEnum]


  export const clzonasOrderByRelevanceFieldEnum: {
    codzon: 'codzon',
    zondes: 'zondes'
  };

  export type clzonasOrderByRelevanceFieldEnum = (typeof clzonasOrderByRelevanceFieldEnum)[keyof typeof clzonasOrderByRelevanceFieldEnum]


  export const dtdevolucionOrderByRelevanceFieldEnum: {
    estatus: 'estatus',
    comentario: 'comentario',
    descrip: 'descrip',
    codcli: 'codcli',
    codven: 'codven',
    codtran: 'codtran'
  };

  export type dtdevolucionOrderByRelevanceFieldEnum = (typeof dtdevolucionOrderByRelevanceFieldEnum)[keyof typeof dtdevolucionOrderByRelevanceFieldEnum]


  export const dtdevolucionesOrderByRelevanceFieldEnum: {
    codart: 'codart',
    serial: 'serial',
    descripcion: 'descripcion'
  };

  export type dtdevolucionesOrderByRelevanceFieldEnum = (typeof dtdevolucionesOrderByRelevanceFieldEnum)[keyof typeof dtdevolucionesOrderByRelevanceFieldEnum]


  export const hsplanpagosOrderByRelevanceFieldEnum: {
    unidad: 'unidad',
    empresa: 'empresa',
    tipodocumento: 'tipodocumento',
    codigobeneficiario: 'codigobeneficiario',
    beneficiario: 'beneficiario',
    cuentabanco: 'cuentabanco',
    banco: 'banco',
    rifproveedor: 'rifproveedor',
    tipoproveedor: 'tipoproveedor',
    monedaproveedor: 'monedaproveedor',
    registradopor: 'registradopor',
    observacion: 'observacion',
    moneda: 'moneda',
    clasegasto: 'clasegasto'
  };

  export type hsplanpagosOrderByRelevanceFieldEnum = (typeof hsplanpagosOrderByRelevanceFieldEnum)[keyof typeof hsplanpagosOrderByRelevanceFieldEnum]


  export const metasOrderByRelevanceFieldEnum: {
    anio: 'anio',
    mes: 'mes',
    codven: 'codven',
    codart: 'codart'
  };

  export type metasOrderByRelevanceFieldEnum = (typeof metasOrderByRelevanceFieldEnum)[keyof typeof metasOrderByRelevanceFieldEnum]


  export const mtclientesOrderByRelevanceFieldEnum: {
    codcli: 'codcli',
    clides: 'clides',
    dirfiscal: 'dirfiscal',
    telefonos: 'telefonos',
    comentario: 'comentario',
    contacto: 'contacto',
    codzon: 'codzon',
    codseg: 'codseg',
    codven: 'codven',
    direntrega: 'direntrega',
    numrif: 'numrif',
    tipocli: 'tipocli',
    email: 'email',
    ciudad: 'ciudad'
  };

  export type mtclientesOrderByRelevanceFieldEnum = (typeof mtclientesOrderByRelevanceFieldEnum)[keyof typeof mtclientesOrderByRelevanceFieldEnum]


  export const mtprofitartOrderByRelevanceFieldEnum: {
    codart: 'codart',
    artdes: 'artdes',
    codlin: 'codlin',
    codcat: 'codcat',
    codsubl: 'codsubl',
    codcolor: 'codcolor',
    codbarra: 'codbarra',
    artref: 'artref',
    modelo: 'modelo',
    coment: 'coment',
    univenta: 'univenta',
    unicompra: 'unicompra',
    suniventa: 'suniventa',
    sunicompra: 'sunicompra',
    tipocosto: 'tipocosto',
    tipoart: 'tipoart',
    tipoimp: 'tipoimp'
  };

  export type mtprofitartOrderByRelevanceFieldEnum = (typeof mtprofitartOrderByRelevanceFieldEnum)[keyof typeof mtprofitartOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type cbdevolucionesWhereInput = {
    AND?: cbdevolucionesWhereInput | cbdevolucionesWhereInput[]
    OR?: cbdevolucionesWhereInput[]
    NOT?: cbdevolucionesWhereInput | cbdevolucionesWhereInput[]
    devonum?: IntFilter<"cbdevoluciones"> | number
    fecha?: DateTimeFilter<"cbdevoluciones"> | Date | string
    estatus?: IntFilter<"cbdevoluciones"> | number
    codcli?: StringFilter<"cbdevoluciones"> | string
    motivo?: StringFilter<"cbdevoluciones"> | string
    tipo?: IntFilter<"cbdevoluciones"> | number
    chofer?: StringFilter<"cbdevoluciones"> | string
  }

  export type cbdevolucionesOrderByWithRelationInput = {
    devonum?: SortOrder
    fecha?: SortOrder
    estatus?: SortOrder
    codcli?: SortOrder
    motivo?: SortOrder
    tipo?: SortOrder
    chofer?: SortOrder
    _relevance?: cbdevolucionesOrderByRelevanceInput
  }

  export type cbdevolucionesWhereUniqueInput = Prisma.AtLeast<{
    devonum?: number
    AND?: cbdevolucionesWhereInput | cbdevolucionesWhereInput[]
    OR?: cbdevolucionesWhereInput[]
    NOT?: cbdevolucionesWhereInput | cbdevolucionesWhereInput[]
    fecha?: DateTimeFilter<"cbdevoluciones"> | Date | string
    estatus?: IntFilter<"cbdevoluciones"> | number
    codcli?: StringFilter<"cbdevoluciones"> | string
    motivo?: StringFilter<"cbdevoluciones"> | string
    tipo?: IntFilter<"cbdevoluciones"> | number
    chofer?: StringFilter<"cbdevoluciones"> | string
  }, "devonum">

  export type cbdevolucionesOrderByWithAggregationInput = {
    devonum?: SortOrder
    fecha?: SortOrder
    estatus?: SortOrder
    codcli?: SortOrder
    motivo?: SortOrder
    tipo?: SortOrder
    chofer?: SortOrder
    _count?: cbdevolucionesCountOrderByAggregateInput
    _avg?: cbdevolucionesAvgOrderByAggregateInput
    _max?: cbdevolucionesMaxOrderByAggregateInput
    _min?: cbdevolucionesMinOrderByAggregateInput
    _sum?: cbdevolucionesSumOrderByAggregateInput
  }

  export type cbdevolucionesScalarWhereWithAggregatesInput = {
    AND?: cbdevolucionesScalarWhereWithAggregatesInput | cbdevolucionesScalarWhereWithAggregatesInput[]
    OR?: cbdevolucionesScalarWhereWithAggregatesInput[]
    NOT?: cbdevolucionesScalarWhereWithAggregatesInput | cbdevolucionesScalarWhereWithAggregatesInput[]
    devonum?: IntWithAggregatesFilter<"cbdevoluciones"> | number
    fecha?: DateTimeWithAggregatesFilter<"cbdevoluciones"> | Date | string
    estatus?: IntWithAggregatesFilter<"cbdevoluciones"> | number
    codcli?: StringWithAggregatesFilter<"cbdevoluciones"> | string
    motivo?: StringWithAggregatesFilter<"cbdevoluciones"> | string
    tipo?: IntWithAggregatesFilter<"cbdevoluciones"> | number
    chofer?: StringWithAggregatesFilter<"cbdevoluciones"> | string
  }

  export type cbplanpagosWhereInput = {
    AND?: cbplanpagosWhereInput | cbplanpagosWhereInput[]
    OR?: cbplanpagosWhereInput[]
    NOT?: cbplanpagosWhereInput | cbplanpagosWhereInput[]
    planpagonumero?: IntFilter<"cbplanpagos"> | number
    unidad?: StringFilter<"cbplanpagos"> | string
    empresa?: StringFilter<"cbplanpagos"> | string
    fechapagoautorizada?: DateTimeFilter<"cbplanpagos"> | Date | string
    descripcionplan?: StringFilter<"cbplanpagos"> | string
    fechaautorizadopor?: DateTimeNullableFilter<"cbplanpagos"> | Date | string | null
    autorizadopor?: StringNullableFilter<"cbplanpagos"> | string | null
    totalnetobsd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalnetousd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalsaldobsd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalsaldousd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalautorizadobsd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalautorizadousd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalpagadobsd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalpagadousd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalxpagarbsd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalxpagarusd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    generadotxt?: BoolFilter<"cbplanpagos"> | boolean
    conciliadopago?: BoolFilter<"cbplanpagos"> | boolean
    owneruser?: IntFilter<"cbplanpagos"> | number
  }

  export type cbplanpagosOrderByWithRelationInput = {
    planpagonumero?: SortOrder
    unidad?: SortOrder
    empresa?: SortOrder
    fechapagoautorizada?: SortOrder
    descripcionplan?: SortOrder
    fechaautorizadopor?: SortOrderInput | SortOrder
    autorizadopor?: SortOrderInput | SortOrder
    totalnetobsd?: SortOrder
    totalnetousd?: SortOrder
    totalsaldobsd?: SortOrder
    totalsaldousd?: SortOrder
    totalautorizadobsd?: SortOrder
    totalautorizadousd?: SortOrder
    totalpagadobsd?: SortOrder
    totalpagadousd?: SortOrder
    totalxpagarbsd?: SortOrder
    totalxpagarusd?: SortOrder
    generadotxt?: SortOrder
    conciliadopago?: SortOrder
    owneruser?: SortOrder
    _relevance?: cbplanpagosOrderByRelevanceInput
  }

  export type cbplanpagosWhereUniqueInput = Prisma.AtLeast<{
    planpagonumero?: number
    AND?: cbplanpagosWhereInput | cbplanpagosWhereInput[]
    OR?: cbplanpagosWhereInput[]
    NOT?: cbplanpagosWhereInput | cbplanpagosWhereInput[]
    unidad?: StringFilter<"cbplanpagos"> | string
    empresa?: StringFilter<"cbplanpagos"> | string
    fechapagoautorizada?: DateTimeFilter<"cbplanpagos"> | Date | string
    descripcionplan?: StringFilter<"cbplanpagos"> | string
    fechaautorizadopor?: DateTimeNullableFilter<"cbplanpagos"> | Date | string | null
    autorizadopor?: StringNullableFilter<"cbplanpagos"> | string | null
    totalnetobsd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalnetousd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalsaldobsd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalsaldousd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalautorizadobsd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalautorizadousd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalpagadobsd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalpagadousd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalxpagarbsd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalxpagarusd?: DecimalFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    generadotxt?: BoolFilter<"cbplanpagos"> | boolean
    conciliadopago?: BoolFilter<"cbplanpagos"> | boolean
    owneruser?: IntFilter<"cbplanpagos"> | number
  }, "planpagonumero">

  export type cbplanpagosOrderByWithAggregationInput = {
    planpagonumero?: SortOrder
    unidad?: SortOrder
    empresa?: SortOrder
    fechapagoautorizada?: SortOrder
    descripcionplan?: SortOrder
    fechaautorizadopor?: SortOrderInput | SortOrder
    autorizadopor?: SortOrderInput | SortOrder
    totalnetobsd?: SortOrder
    totalnetousd?: SortOrder
    totalsaldobsd?: SortOrder
    totalsaldousd?: SortOrder
    totalautorizadobsd?: SortOrder
    totalautorizadousd?: SortOrder
    totalpagadobsd?: SortOrder
    totalpagadousd?: SortOrder
    totalxpagarbsd?: SortOrder
    totalxpagarusd?: SortOrder
    generadotxt?: SortOrder
    conciliadopago?: SortOrder
    owneruser?: SortOrder
    _count?: cbplanpagosCountOrderByAggregateInput
    _avg?: cbplanpagosAvgOrderByAggregateInput
    _max?: cbplanpagosMaxOrderByAggregateInput
    _min?: cbplanpagosMinOrderByAggregateInput
    _sum?: cbplanpagosSumOrderByAggregateInput
  }

  export type cbplanpagosScalarWhereWithAggregatesInput = {
    AND?: cbplanpagosScalarWhereWithAggregatesInput | cbplanpagosScalarWhereWithAggregatesInput[]
    OR?: cbplanpagosScalarWhereWithAggregatesInput[]
    NOT?: cbplanpagosScalarWhereWithAggregatesInput | cbplanpagosScalarWhereWithAggregatesInput[]
    planpagonumero?: IntWithAggregatesFilter<"cbplanpagos"> | number
    unidad?: StringWithAggregatesFilter<"cbplanpagos"> | string
    empresa?: StringWithAggregatesFilter<"cbplanpagos"> | string
    fechapagoautorizada?: DateTimeWithAggregatesFilter<"cbplanpagos"> | Date | string
    descripcionplan?: StringWithAggregatesFilter<"cbplanpagos"> | string
    fechaautorizadopor?: DateTimeNullableWithAggregatesFilter<"cbplanpagos"> | Date | string | null
    autorizadopor?: StringNullableWithAggregatesFilter<"cbplanpagos"> | string | null
    totalnetobsd?: DecimalWithAggregatesFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalnetousd?: DecimalWithAggregatesFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalsaldobsd?: DecimalWithAggregatesFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalsaldousd?: DecimalWithAggregatesFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalautorizadobsd?: DecimalWithAggregatesFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalautorizadousd?: DecimalWithAggregatesFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalpagadobsd?: DecimalWithAggregatesFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalpagadousd?: DecimalWithAggregatesFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalxpagarbsd?: DecimalWithAggregatesFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    totalxpagarusd?: DecimalWithAggregatesFilter<"cbplanpagos"> | Decimal | DecimalJsLike | number | string
    generadotxt?: BoolWithAggregatesFilter<"cbplanpagos"> | boolean
    conciliadopago?: BoolWithAggregatesFilter<"cbplanpagos"> | boolean
    owneruser?: IntWithAggregatesFilter<"cbplanpagos"> | number
  }

  export type cbsolicimatWhereInput = {
    AND?: cbsolicimatWhereInput | cbsolicimatWhereInput[]
    OR?: cbsolicimatWhereInput[]
    NOT?: cbsolicimatWhereInput | cbsolicimatWhereInput[]
    solicitudnumero?: IntFilter<"cbsolicimat"> | number
    empresa?: StringFilter<"cbsolicimat"> | string
    codigoobra?: StringFilter<"cbsolicimat"> | string
    descripcionobra?: StringFilter<"cbsolicimat"> | string
    numerocontrol?: IntFilter<"cbsolicimat"> | number
    solicitanteuser?: StringNullableFilter<"cbsolicimat"> | string | null
    solicitantecodigo?: StringNullableFilter<"cbsolicimat"> | string | null
    fechasolicitud?: DateTimeFilter<"cbsolicimat"> | Date | string
    fechautilizacion?: DateTimeFilter<"cbsolicimat"> | Date | string
    observacion?: StringFilter<"cbsolicimat"> | string
    actividad?: StringFilter<"cbsolicimat"> | string
    direccionentrega?: StringFilter<"cbsolicimat"> | string
    fecharevisado?: DateTimeNullableFilter<"cbsolicimat"> | Date | string | null
    revisadopor?: StringNullableFilter<"cbsolicimat"> | string | null
    registradopor?: StringFilter<"cbsolicimat"> | string
    revisado?: BoolFilter<"cbsolicimat"> | boolean
    procesado?: BoolFilter<"cbsolicimat"> | boolean
    anulado?: BoolFilter<"cbsolicimat"> | boolean
  }

  export type cbsolicimatOrderByWithRelationInput = {
    solicitudnumero?: SortOrder
    empresa?: SortOrder
    codigoobra?: SortOrder
    descripcionobra?: SortOrder
    numerocontrol?: SortOrder
    solicitanteuser?: SortOrderInput | SortOrder
    solicitantecodigo?: SortOrderInput | SortOrder
    fechasolicitud?: SortOrder
    fechautilizacion?: SortOrder
    observacion?: SortOrder
    actividad?: SortOrder
    direccionentrega?: SortOrder
    fecharevisado?: SortOrderInput | SortOrder
    revisadopor?: SortOrderInput | SortOrder
    registradopor?: SortOrder
    revisado?: SortOrder
    procesado?: SortOrder
    anulado?: SortOrder
    _relevance?: cbsolicimatOrderByRelevanceInput
  }

  export type cbsolicimatWhereUniqueInput = Prisma.AtLeast<{
    solicitudnumero?: number
    AND?: cbsolicimatWhereInput | cbsolicimatWhereInput[]
    OR?: cbsolicimatWhereInput[]
    NOT?: cbsolicimatWhereInput | cbsolicimatWhereInput[]
    empresa?: StringFilter<"cbsolicimat"> | string
    codigoobra?: StringFilter<"cbsolicimat"> | string
    descripcionobra?: StringFilter<"cbsolicimat"> | string
    numerocontrol?: IntFilter<"cbsolicimat"> | number
    solicitanteuser?: StringNullableFilter<"cbsolicimat"> | string | null
    solicitantecodigo?: StringNullableFilter<"cbsolicimat"> | string | null
    fechasolicitud?: DateTimeFilter<"cbsolicimat"> | Date | string
    fechautilizacion?: DateTimeFilter<"cbsolicimat"> | Date | string
    observacion?: StringFilter<"cbsolicimat"> | string
    actividad?: StringFilter<"cbsolicimat"> | string
    direccionentrega?: StringFilter<"cbsolicimat"> | string
    fecharevisado?: DateTimeNullableFilter<"cbsolicimat"> | Date | string | null
    revisadopor?: StringNullableFilter<"cbsolicimat"> | string | null
    registradopor?: StringFilter<"cbsolicimat"> | string
    revisado?: BoolFilter<"cbsolicimat"> | boolean
    procesado?: BoolFilter<"cbsolicimat"> | boolean
    anulado?: BoolFilter<"cbsolicimat"> | boolean
  }, "solicitudnumero">

  export type cbsolicimatOrderByWithAggregationInput = {
    solicitudnumero?: SortOrder
    empresa?: SortOrder
    codigoobra?: SortOrder
    descripcionobra?: SortOrder
    numerocontrol?: SortOrder
    solicitanteuser?: SortOrderInput | SortOrder
    solicitantecodigo?: SortOrderInput | SortOrder
    fechasolicitud?: SortOrder
    fechautilizacion?: SortOrder
    observacion?: SortOrder
    actividad?: SortOrder
    direccionentrega?: SortOrder
    fecharevisado?: SortOrderInput | SortOrder
    revisadopor?: SortOrderInput | SortOrder
    registradopor?: SortOrder
    revisado?: SortOrder
    procesado?: SortOrder
    anulado?: SortOrder
    _count?: cbsolicimatCountOrderByAggregateInput
    _avg?: cbsolicimatAvgOrderByAggregateInput
    _max?: cbsolicimatMaxOrderByAggregateInput
    _min?: cbsolicimatMinOrderByAggregateInput
    _sum?: cbsolicimatSumOrderByAggregateInput
  }

  export type cbsolicimatScalarWhereWithAggregatesInput = {
    AND?: cbsolicimatScalarWhereWithAggregatesInput | cbsolicimatScalarWhereWithAggregatesInput[]
    OR?: cbsolicimatScalarWhereWithAggregatesInput[]
    NOT?: cbsolicimatScalarWhereWithAggregatesInput | cbsolicimatScalarWhereWithAggregatesInput[]
    solicitudnumero?: IntWithAggregatesFilter<"cbsolicimat"> | number
    empresa?: StringWithAggregatesFilter<"cbsolicimat"> | string
    codigoobra?: StringWithAggregatesFilter<"cbsolicimat"> | string
    descripcionobra?: StringWithAggregatesFilter<"cbsolicimat"> | string
    numerocontrol?: IntWithAggregatesFilter<"cbsolicimat"> | number
    solicitanteuser?: StringNullableWithAggregatesFilter<"cbsolicimat"> | string | null
    solicitantecodigo?: StringNullableWithAggregatesFilter<"cbsolicimat"> | string | null
    fechasolicitud?: DateTimeWithAggregatesFilter<"cbsolicimat"> | Date | string
    fechautilizacion?: DateTimeWithAggregatesFilter<"cbsolicimat"> | Date | string
    observacion?: StringWithAggregatesFilter<"cbsolicimat"> | string
    actividad?: StringWithAggregatesFilter<"cbsolicimat"> | string
    direccionentrega?: StringWithAggregatesFilter<"cbsolicimat"> | string
    fecharevisado?: DateTimeNullableWithAggregatesFilter<"cbsolicimat"> | Date | string | null
    revisadopor?: StringNullableWithAggregatesFilter<"cbsolicimat"> | string | null
    registradopor?: StringWithAggregatesFilter<"cbsolicimat"> | string
    revisado?: BoolWithAggregatesFilter<"cbsolicimat"> | boolean
    procesado?: BoolWithAggregatesFilter<"cbsolicimat"> | boolean
    anulado?: BoolWithAggregatesFilter<"cbsolicimat"> | boolean
  }

  export type clbancoprovWhereInput = {
    AND?: clbancoprovWhereInput | clbancoprovWhereInput[]
    OR?: clbancoprovWhereInput[]
    NOT?: clbancoprovWhereInput | clbancoprovWhereInput[]
    numerocuenta?: IntFilter<"clbancoprov"> | number
    beneficiario?: StringFilter<"clbancoprov"> | string
    titularcuenta?: StringNullableFilter<"clbancoprov"> | string | null
    cuentabanco?: StringNullableFilter<"clbancoprov"> | string | null
    banco?: StringNullableFilter<"clbancoprov"> | string | null
    codigobanco?: StringNullableFilter<"clbancoprov"> | string | null
    codigoswift?: StringNullableFilter<"clbancoprov"> | string | null
    tipocuenta?: StringNullableFilter<"clbancoprov"> | string | null
    rifproveedor?: StringFilter<"clbancoprov"> | string
  }

  export type clbancoprovOrderByWithRelationInput = {
    numerocuenta?: SortOrder
    beneficiario?: SortOrder
    titularcuenta?: SortOrderInput | SortOrder
    cuentabanco?: SortOrderInput | SortOrder
    banco?: SortOrderInput | SortOrder
    codigobanco?: SortOrderInput | SortOrder
    codigoswift?: SortOrderInput | SortOrder
    tipocuenta?: SortOrderInput | SortOrder
    rifproveedor?: SortOrder
    _relevance?: clbancoprovOrderByRelevanceInput
  }

  export type clbancoprovWhereUniqueInput = Prisma.AtLeast<{
    numerocuenta?: number
    AND?: clbancoprovWhereInput | clbancoprovWhereInput[]
    OR?: clbancoprovWhereInput[]
    NOT?: clbancoprovWhereInput | clbancoprovWhereInput[]
    beneficiario?: StringFilter<"clbancoprov"> | string
    titularcuenta?: StringNullableFilter<"clbancoprov"> | string | null
    cuentabanco?: StringNullableFilter<"clbancoprov"> | string | null
    banco?: StringNullableFilter<"clbancoprov"> | string | null
    codigobanco?: StringNullableFilter<"clbancoprov"> | string | null
    codigoswift?: StringNullableFilter<"clbancoprov"> | string | null
    tipocuenta?: StringNullableFilter<"clbancoprov"> | string | null
    rifproveedor?: StringFilter<"clbancoprov"> | string
  }, "numerocuenta">

  export type clbancoprovOrderByWithAggregationInput = {
    numerocuenta?: SortOrder
    beneficiario?: SortOrder
    titularcuenta?: SortOrderInput | SortOrder
    cuentabanco?: SortOrderInput | SortOrder
    banco?: SortOrderInput | SortOrder
    codigobanco?: SortOrderInput | SortOrder
    codigoswift?: SortOrderInput | SortOrder
    tipocuenta?: SortOrderInput | SortOrder
    rifproveedor?: SortOrder
    _count?: clbancoprovCountOrderByAggregateInput
    _avg?: clbancoprovAvgOrderByAggregateInput
    _max?: clbancoprovMaxOrderByAggregateInput
    _min?: clbancoprovMinOrderByAggregateInput
    _sum?: clbancoprovSumOrderByAggregateInput
  }

  export type clbancoprovScalarWhereWithAggregatesInput = {
    AND?: clbancoprovScalarWhereWithAggregatesInput | clbancoprovScalarWhereWithAggregatesInput[]
    OR?: clbancoprovScalarWhereWithAggregatesInput[]
    NOT?: clbancoprovScalarWhereWithAggregatesInput | clbancoprovScalarWhereWithAggregatesInput[]
    numerocuenta?: IntWithAggregatesFilter<"clbancoprov"> | number
    beneficiario?: StringWithAggregatesFilter<"clbancoprov"> | string
    titularcuenta?: StringNullableWithAggregatesFilter<"clbancoprov"> | string | null
    cuentabanco?: StringNullableWithAggregatesFilter<"clbancoprov"> | string | null
    banco?: StringNullableWithAggregatesFilter<"clbancoprov"> | string | null
    codigobanco?: StringNullableWithAggregatesFilter<"clbancoprov"> | string | null
    codigoswift?: StringNullableWithAggregatesFilter<"clbancoprov"> | string | null
    tipocuenta?: StringNullableWithAggregatesFilter<"clbancoprov"> | string | null
    rifproveedor?: StringWithAggregatesFilter<"clbancoprov"> | string
  }

  export type clbancoswiftWhereInput = {
    AND?: clbancoswiftWhereInput | clbancoswiftWhereInput[]
    OR?: clbancoswiftWhereInput[]
    NOT?: clbancoswiftWhereInput | clbancoswiftWhereInput[]
    codigobanco?: StringFilter<"clbancoswift"> | string
    codigoswift?: StringFilter<"clbancoswift"> | string
    nombrecorto?: StringFilter<"clbancoswift"> | string
    tipocuenta?: StringFilter<"clbancoswift"> | string
  }

  export type clbancoswiftOrderByWithRelationInput = {
    codigobanco?: SortOrder
    codigoswift?: SortOrder
    nombrecorto?: SortOrder
    tipocuenta?: SortOrder
    _relevance?: clbancoswiftOrderByRelevanceInput
  }

  export type clbancoswiftWhereUniqueInput = Prisma.AtLeast<{
    codigobanco?: string
    AND?: clbancoswiftWhereInput | clbancoswiftWhereInput[]
    OR?: clbancoswiftWhereInput[]
    NOT?: clbancoswiftWhereInput | clbancoswiftWhereInput[]
    codigoswift?: StringFilter<"clbancoswift"> | string
    nombrecorto?: StringFilter<"clbancoswift"> | string
    tipocuenta?: StringFilter<"clbancoswift"> | string
  }, "codigobanco">

  export type clbancoswiftOrderByWithAggregationInput = {
    codigobanco?: SortOrder
    codigoswift?: SortOrder
    nombrecorto?: SortOrder
    tipocuenta?: SortOrder
    _count?: clbancoswiftCountOrderByAggregateInput
    _max?: clbancoswiftMaxOrderByAggregateInput
    _min?: clbancoswiftMinOrderByAggregateInput
  }

  export type clbancoswiftScalarWhereWithAggregatesInput = {
    AND?: clbancoswiftScalarWhereWithAggregatesInput | clbancoswiftScalarWhereWithAggregatesInput[]
    OR?: clbancoswiftScalarWhereWithAggregatesInput[]
    NOT?: clbancoswiftScalarWhereWithAggregatesInput | clbancoswiftScalarWhereWithAggregatesInput[]
    codigobanco?: StringWithAggregatesFilter<"clbancoswift"> | string
    codigoswift?: StringWithAggregatesFilter<"clbancoswift"> | string
    nombrecorto?: StringWithAggregatesFilter<"clbancoswift"> | string
    tipocuenta?: StringWithAggregatesFilter<"clbancoswift"> | string
  }

  export type clcategoriaWhereInput = {
    AND?: clcategoriaWhereInput | clcategoriaWhereInput[]
    OR?: clcategoriaWhereInput[]
    NOT?: clcategoriaWhereInput | clcategoriaWhereInput[]
    codcat?: StringFilter<"clcategoria"> | string
    catdes?: StringFilter<"clcategoria"> | string
  }

  export type clcategoriaOrderByWithRelationInput = {
    codcat?: SortOrder
    catdes?: SortOrder
    _relevance?: clcategoriaOrderByRelevanceInput
  }

  export type clcategoriaWhereUniqueInput = Prisma.AtLeast<{
    codcat?: string
    AND?: clcategoriaWhereInput | clcategoriaWhereInput[]
    OR?: clcategoriaWhereInput[]
    NOT?: clcategoriaWhereInput | clcategoriaWhereInput[]
    catdes?: StringFilter<"clcategoria"> | string
  }, "codcat">

  export type clcategoriaOrderByWithAggregationInput = {
    codcat?: SortOrder
    catdes?: SortOrder
    _count?: clcategoriaCountOrderByAggregateInput
    _max?: clcategoriaMaxOrderByAggregateInput
    _min?: clcategoriaMinOrderByAggregateInput
  }

  export type clcategoriaScalarWhereWithAggregatesInput = {
    AND?: clcategoriaScalarWhereWithAggregatesInput | clcategoriaScalarWhereWithAggregatesInput[]
    OR?: clcategoriaScalarWhereWithAggregatesInput[]
    NOT?: clcategoriaScalarWhereWithAggregatesInput | clcategoriaScalarWhereWithAggregatesInput[]
    codcat?: StringWithAggregatesFilter<"clcategoria"> | string
    catdes?: StringWithAggregatesFilter<"clcategoria"> | string
  }

  export type cltransporteWhereInput = {
    AND?: cltransporteWhereInput | cltransporteWhereInput[]
    OR?: cltransporteWhereInput[]
    NOT?: cltransporteWhereInput | cltransporteWhereInput[]
    codtran?: StringFilter<"cltransporte"> | string
    trandes?: StringFilter<"cltransporte"> | string
    chofer?: StringNullableFilter<"cltransporte"> | string | null
  }

  export type cltransporteOrderByWithRelationInput = {
    codtran?: SortOrder
    trandes?: SortOrder
    chofer?: SortOrderInput | SortOrder
    _relevance?: cltransporteOrderByRelevanceInput
  }

  export type cltransporteWhereUniqueInput = Prisma.AtLeast<{
    codtran?: string
    AND?: cltransporteWhereInput | cltransporteWhereInput[]
    OR?: cltransporteWhereInput[]
    NOT?: cltransporteWhereInput | cltransporteWhereInput[]
    trandes?: StringFilter<"cltransporte"> | string
    chofer?: StringNullableFilter<"cltransporte"> | string | null
  }, "codtran">

  export type cltransporteOrderByWithAggregationInput = {
    codtran?: SortOrder
    trandes?: SortOrder
    chofer?: SortOrderInput | SortOrder
    _count?: cltransporteCountOrderByAggregateInput
    _max?: cltransporteMaxOrderByAggregateInput
    _min?: cltransporteMinOrderByAggregateInput
  }

  export type cltransporteScalarWhereWithAggregatesInput = {
    AND?: cltransporteScalarWhereWithAggregatesInput | cltransporteScalarWhereWithAggregatesInput[]
    OR?: cltransporteScalarWhereWithAggregatesInput[]
    NOT?: cltransporteScalarWhereWithAggregatesInput | cltransporteScalarWhereWithAggregatesInput[]
    codtran?: StringWithAggregatesFilter<"cltransporte"> | string
    trandes?: StringWithAggregatesFilter<"cltransporte"> | string
    chofer?: StringNullableWithAggregatesFilter<"cltransporte"> | string | null
  }

  export type clzonasWhereInput = {
    AND?: clzonasWhereInput | clzonasWhereInput[]
    OR?: clzonasWhereInput[]
    NOT?: clzonasWhereInput | clzonasWhereInput[]
    codzon?: StringFilter<"clzonas"> | string
    zondes?: StringFilter<"clzonas"> | string
  }

  export type clzonasOrderByWithRelationInput = {
    codzon?: SortOrder
    zondes?: SortOrder
    _relevance?: clzonasOrderByRelevanceInput
  }

  export type clzonasWhereUniqueInput = Prisma.AtLeast<{
    codzon?: string
    AND?: clzonasWhereInput | clzonasWhereInput[]
    OR?: clzonasWhereInput[]
    NOT?: clzonasWhereInput | clzonasWhereInput[]
    zondes?: StringFilter<"clzonas"> | string
  }, "codzon">

  export type clzonasOrderByWithAggregationInput = {
    codzon?: SortOrder
    zondes?: SortOrder
    _count?: clzonasCountOrderByAggregateInput
    _max?: clzonasMaxOrderByAggregateInput
    _min?: clzonasMinOrderByAggregateInput
  }

  export type clzonasScalarWhereWithAggregatesInput = {
    AND?: clzonasScalarWhereWithAggregatesInput | clzonasScalarWhereWithAggregatesInput[]
    OR?: clzonasScalarWhereWithAggregatesInput[]
    NOT?: clzonasScalarWhereWithAggregatesInput | clzonasScalarWhereWithAggregatesInput[]
    codzon?: StringWithAggregatesFilter<"clzonas"> | string
    zondes?: StringWithAggregatesFilter<"clzonas"> | string
  }

  export type dtdevolucionWhereInput = {
    AND?: dtdevolucionWhereInput | dtdevolucionWhereInput[]
    OR?: dtdevolucionWhereInput[]
    NOT?: dtdevolucionWhereInput | dtdevolucionWhereInput[]
    devnum?: IntFilter<"dtdevolucion"> | number
    estatus?: StringFilter<"dtdevolucion"> | string
    comentario?: StringNullableFilter<"dtdevolucion"> | string | null
    descrip?: StringFilter<"dtdevolucion"> | string
    saldo?: DecimalFilter<"dtdevolucion"> | Decimal | DecimalJsLike | number | string
    fecemis?: DateTimeFilter<"dtdevolucion"> | Date | string
    fecvenc?: DateTimeFilter<"dtdevolucion"> | Date | string
    codcli?: StringFilter<"dtdevolucion"> | string
    codven?: StringFilter<"dtdevolucion"> | string
    codtran?: StringFilter<"dtdevolucion"> | string
  }

  export type dtdevolucionOrderByWithRelationInput = {
    devnum?: SortOrder
    estatus?: SortOrder
    comentario?: SortOrderInput | SortOrder
    descrip?: SortOrder
    saldo?: SortOrder
    fecemis?: SortOrder
    fecvenc?: SortOrder
    codcli?: SortOrder
    codven?: SortOrder
    codtran?: SortOrder
    _relevance?: dtdevolucionOrderByRelevanceInput
  }

  export type dtdevolucionWhereUniqueInput = Prisma.AtLeast<{
    devnum?: number
    AND?: dtdevolucionWhereInput | dtdevolucionWhereInput[]
    OR?: dtdevolucionWhereInput[]
    NOT?: dtdevolucionWhereInput | dtdevolucionWhereInput[]
    estatus?: StringFilter<"dtdevolucion"> | string
    comentario?: StringNullableFilter<"dtdevolucion"> | string | null
    descrip?: StringFilter<"dtdevolucion"> | string
    saldo?: DecimalFilter<"dtdevolucion"> | Decimal | DecimalJsLike | number | string
    fecemis?: DateTimeFilter<"dtdevolucion"> | Date | string
    fecvenc?: DateTimeFilter<"dtdevolucion"> | Date | string
    codcli?: StringFilter<"dtdevolucion"> | string
    codven?: StringFilter<"dtdevolucion"> | string
    codtran?: StringFilter<"dtdevolucion"> | string
  }, "devnum">

  export type dtdevolucionOrderByWithAggregationInput = {
    devnum?: SortOrder
    estatus?: SortOrder
    comentario?: SortOrderInput | SortOrder
    descrip?: SortOrder
    saldo?: SortOrder
    fecemis?: SortOrder
    fecvenc?: SortOrder
    codcli?: SortOrder
    codven?: SortOrder
    codtran?: SortOrder
    _count?: dtdevolucionCountOrderByAggregateInput
    _avg?: dtdevolucionAvgOrderByAggregateInput
    _max?: dtdevolucionMaxOrderByAggregateInput
    _min?: dtdevolucionMinOrderByAggregateInput
    _sum?: dtdevolucionSumOrderByAggregateInput
  }

  export type dtdevolucionScalarWhereWithAggregatesInput = {
    AND?: dtdevolucionScalarWhereWithAggregatesInput | dtdevolucionScalarWhereWithAggregatesInput[]
    OR?: dtdevolucionScalarWhereWithAggregatesInput[]
    NOT?: dtdevolucionScalarWhereWithAggregatesInput | dtdevolucionScalarWhereWithAggregatesInput[]
    devnum?: IntWithAggregatesFilter<"dtdevolucion"> | number
    estatus?: StringWithAggregatesFilter<"dtdevolucion"> | string
    comentario?: StringNullableWithAggregatesFilter<"dtdevolucion"> | string | null
    descrip?: StringWithAggregatesFilter<"dtdevolucion"> | string
    saldo?: DecimalWithAggregatesFilter<"dtdevolucion"> | Decimal | DecimalJsLike | number | string
    fecemis?: DateTimeWithAggregatesFilter<"dtdevolucion"> | Date | string
    fecvenc?: DateTimeWithAggregatesFilter<"dtdevolucion"> | Date | string
    codcli?: StringWithAggregatesFilter<"dtdevolucion"> | string
    codven?: StringWithAggregatesFilter<"dtdevolucion"> | string
    codtran?: StringWithAggregatesFilter<"dtdevolucion"> | string
  }

  export type dtdevolucionesWhereInput = {
    AND?: dtdevolucionesWhereInput | dtdevolucionesWhereInput[]
    OR?: dtdevolucionesWhereInput[]
    NOT?: dtdevolucionesWhereInput | dtdevolucionesWhereInput[]
    itemnum?: IntFilter<"dtdevoluciones"> | number
    devonum?: IntFilter<"dtdevoluciones"> | number
    codart?: StringFilter<"dtdevoluciones"> | string
    serial?: StringFilter<"dtdevoluciones"> | string
    descripcion?: StringFilter<"dtdevoluciones"> | string
    cantidad?: IntFilter<"dtdevoluciones"> | number
  }

  export type dtdevolucionesOrderByWithRelationInput = {
    itemnum?: SortOrder
    devonum?: SortOrder
    codart?: SortOrder
    serial?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    _relevance?: dtdevolucionesOrderByRelevanceInput
  }

  export type dtdevolucionesWhereUniqueInput = Prisma.AtLeast<{
    itemnum_devonum?: dtdevolucionesItemnumDevonumCompoundUniqueInput
    AND?: dtdevolucionesWhereInput | dtdevolucionesWhereInput[]
    OR?: dtdevolucionesWhereInput[]
    NOT?: dtdevolucionesWhereInput | dtdevolucionesWhereInput[]
    itemnum?: IntFilter<"dtdevoluciones"> | number
    devonum?: IntFilter<"dtdevoluciones"> | number
    codart?: StringFilter<"dtdevoluciones"> | string
    serial?: StringFilter<"dtdevoluciones"> | string
    descripcion?: StringFilter<"dtdevoluciones"> | string
    cantidad?: IntFilter<"dtdevoluciones"> | number
  }, "itemnum_devonum">

  export type dtdevolucionesOrderByWithAggregationInput = {
    itemnum?: SortOrder
    devonum?: SortOrder
    codart?: SortOrder
    serial?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    _count?: dtdevolucionesCountOrderByAggregateInput
    _avg?: dtdevolucionesAvgOrderByAggregateInput
    _max?: dtdevolucionesMaxOrderByAggregateInput
    _min?: dtdevolucionesMinOrderByAggregateInput
    _sum?: dtdevolucionesSumOrderByAggregateInput
  }

  export type dtdevolucionesScalarWhereWithAggregatesInput = {
    AND?: dtdevolucionesScalarWhereWithAggregatesInput | dtdevolucionesScalarWhereWithAggregatesInput[]
    OR?: dtdevolucionesScalarWhereWithAggregatesInput[]
    NOT?: dtdevolucionesScalarWhereWithAggregatesInput | dtdevolucionesScalarWhereWithAggregatesInput[]
    itemnum?: IntWithAggregatesFilter<"dtdevoluciones"> | number
    devonum?: IntWithAggregatesFilter<"dtdevoluciones"> | number
    codart?: StringWithAggregatesFilter<"dtdevoluciones"> | string
    serial?: StringWithAggregatesFilter<"dtdevoluciones"> | string
    descripcion?: StringWithAggregatesFilter<"dtdevoluciones"> | string
    cantidad?: IntWithAggregatesFilter<"dtdevoluciones"> | number
  }

  export type hsplanpagosWhereInput = {
    AND?: hsplanpagosWhereInput | hsplanpagosWhereInput[]
    OR?: hsplanpagosWhereInput[]
    NOT?: hsplanpagosWhereInput | hsplanpagosWhereInput[]
    unidad?: StringFilter<"hsplanpagos"> | string
    empresa?: StringFilter<"hsplanpagos"> | string
    tipodocumento?: StringFilter<"hsplanpagos"> | string
    numerodocumento?: IntFilter<"hsplanpagos"> | number
    codigobeneficiario?: StringNullableFilter<"hsplanpagos"> | string | null
    beneficiario?: StringFilter<"hsplanpagos"> | string
    cuentabanco?: StringNullableFilter<"hsplanpagos"> | string | null
    banco?: StringNullableFilter<"hsplanpagos"> | string | null
    rifproveedor?: StringNullableFilter<"hsplanpagos"> | string | null
    tipoproveedor?: StringFilter<"hsplanpagos"> | string
    monedaproveedor?: StringNullableFilter<"hsplanpagos"> | string | null
    autorizadopagar?: BoolFilter<"hsplanpagos"> | boolean
    fechaemision?: DateTimeFilter<"hsplanpagos"> | Date | string
    fechavencimiento?: DateTimeFilter<"hsplanpagos"> | Date | string
    fecharegistro?: DateTimeFilter<"hsplanpagos"> | Date | string
    registradopor?: StringFilter<"hsplanpagos"> | string
    numerofactura?: IntFilter<"hsplanpagos"> | number
    observacion?: StringNullableFilter<"hsplanpagos"> | string | null
    tasacambio?: DecimalFilter<"hsplanpagos"> | Decimal | DecimalJsLike | number | string
    moneda?: StringFilter<"hsplanpagos"> | string
    montoneto?: DecimalFilter<"hsplanpagos"> | Decimal | DecimalJsLike | number | string
    montosaldo?: DecimalFilter<"hsplanpagos"> | Decimal | DecimalJsLike | number | string
    clasegasto?: StringNullableFilter<"hsplanpagos"> | string | null
    owneruser?: IntFilter<"hsplanpagos"> | number
  }

  export type hsplanpagosOrderByWithRelationInput = {
    unidad?: SortOrder
    empresa?: SortOrder
    tipodocumento?: SortOrder
    numerodocumento?: SortOrder
    codigobeneficiario?: SortOrderInput | SortOrder
    beneficiario?: SortOrder
    cuentabanco?: SortOrderInput | SortOrder
    banco?: SortOrderInput | SortOrder
    rifproveedor?: SortOrderInput | SortOrder
    tipoproveedor?: SortOrder
    monedaproveedor?: SortOrderInput | SortOrder
    autorizadopagar?: SortOrder
    fechaemision?: SortOrder
    fechavencimiento?: SortOrder
    fecharegistro?: SortOrder
    registradopor?: SortOrder
    numerofactura?: SortOrder
    observacion?: SortOrderInput | SortOrder
    tasacambio?: SortOrder
    moneda?: SortOrder
    montoneto?: SortOrder
    montosaldo?: SortOrder
    clasegasto?: SortOrderInput | SortOrder
    owneruser?: SortOrder
    _relevance?: hsplanpagosOrderByRelevanceInput
  }

  export type hsplanpagosWhereUniqueInput = Prisma.AtLeast<{
    numerodocumento?: number
    AND?: hsplanpagosWhereInput | hsplanpagosWhereInput[]
    OR?: hsplanpagosWhereInput[]
    NOT?: hsplanpagosWhereInput | hsplanpagosWhereInput[]
    unidad?: StringFilter<"hsplanpagos"> | string
    empresa?: StringFilter<"hsplanpagos"> | string
    tipodocumento?: StringFilter<"hsplanpagos"> | string
    codigobeneficiario?: StringNullableFilter<"hsplanpagos"> | string | null
    beneficiario?: StringFilter<"hsplanpagos"> | string
    cuentabanco?: StringNullableFilter<"hsplanpagos"> | string | null
    banco?: StringNullableFilter<"hsplanpagos"> | string | null
    rifproveedor?: StringNullableFilter<"hsplanpagos"> | string | null
    tipoproveedor?: StringFilter<"hsplanpagos"> | string
    monedaproveedor?: StringNullableFilter<"hsplanpagos"> | string | null
    autorizadopagar?: BoolFilter<"hsplanpagos"> | boolean
    fechaemision?: DateTimeFilter<"hsplanpagos"> | Date | string
    fechavencimiento?: DateTimeFilter<"hsplanpagos"> | Date | string
    fecharegistro?: DateTimeFilter<"hsplanpagos"> | Date | string
    registradopor?: StringFilter<"hsplanpagos"> | string
    numerofactura?: IntFilter<"hsplanpagos"> | number
    observacion?: StringNullableFilter<"hsplanpagos"> | string | null
    tasacambio?: DecimalFilter<"hsplanpagos"> | Decimal | DecimalJsLike | number | string
    moneda?: StringFilter<"hsplanpagos"> | string
    montoneto?: DecimalFilter<"hsplanpagos"> | Decimal | DecimalJsLike | number | string
    montosaldo?: DecimalFilter<"hsplanpagos"> | Decimal | DecimalJsLike | number | string
    clasegasto?: StringNullableFilter<"hsplanpagos"> | string | null
    owneruser?: IntFilter<"hsplanpagos"> | number
  }, "numerodocumento">

  export type hsplanpagosOrderByWithAggregationInput = {
    unidad?: SortOrder
    empresa?: SortOrder
    tipodocumento?: SortOrder
    numerodocumento?: SortOrder
    codigobeneficiario?: SortOrderInput | SortOrder
    beneficiario?: SortOrder
    cuentabanco?: SortOrderInput | SortOrder
    banco?: SortOrderInput | SortOrder
    rifproveedor?: SortOrderInput | SortOrder
    tipoproveedor?: SortOrder
    monedaproveedor?: SortOrderInput | SortOrder
    autorizadopagar?: SortOrder
    fechaemision?: SortOrder
    fechavencimiento?: SortOrder
    fecharegistro?: SortOrder
    registradopor?: SortOrder
    numerofactura?: SortOrder
    observacion?: SortOrderInput | SortOrder
    tasacambio?: SortOrder
    moneda?: SortOrder
    montoneto?: SortOrder
    montosaldo?: SortOrder
    clasegasto?: SortOrderInput | SortOrder
    owneruser?: SortOrder
    _count?: hsplanpagosCountOrderByAggregateInput
    _avg?: hsplanpagosAvgOrderByAggregateInput
    _max?: hsplanpagosMaxOrderByAggregateInput
    _min?: hsplanpagosMinOrderByAggregateInput
    _sum?: hsplanpagosSumOrderByAggregateInput
  }

  export type hsplanpagosScalarWhereWithAggregatesInput = {
    AND?: hsplanpagosScalarWhereWithAggregatesInput | hsplanpagosScalarWhereWithAggregatesInput[]
    OR?: hsplanpagosScalarWhereWithAggregatesInput[]
    NOT?: hsplanpagosScalarWhereWithAggregatesInput | hsplanpagosScalarWhereWithAggregatesInput[]
    unidad?: StringWithAggregatesFilter<"hsplanpagos"> | string
    empresa?: StringWithAggregatesFilter<"hsplanpagos"> | string
    tipodocumento?: StringWithAggregatesFilter<"hsplanpagos"> | string
    numerodocumento?: IntWithAggregatesFilter<"hsplanpagos"> | number
    codigobeneficiario?: StringNullableWithAggregatesFilter<"hsplanpagos"> | string | null
    beneficiario?: StringWithAggregatesFilter<"hsplanpagos"> | string
    cuentabanco?: StringNullableWithAggregatesFilter<"hsplanpagos"> | string | null
    banco?: StringNullableWithAggregatesFilter<"hsplanpagos"> | string | null
    rifproveedor?: StringNullableWithAggregatesFilter<"hsplanpagos"> | string | null
    tipoproveedor?: StringWithAggregatesFilter<"hsplanpagos"> | string
    monedaproveedor?: StringNullableWithAggregatesFilter<"hsplanpagos"> | string | null
    autorizadopagar?: BoolWithAggregatesFilter<"hsplanpagos"> | boolean
    fechaemision?: DateTimeWithAggregatesFilter<"hsplanpagos"> | Date | string
    fechavencimiento?: DateTimeWithAggregatesFilter<"hsplanpagos"> | Date | string
    fecharegistro?: DateTimeWithAggregatesFilter<"hsplanpagos"> | Date | string
    registradopor?: StringWithAggregatesFilter<"hsplanpagos"> | string
    numerofactura?: IntWithAggregatesFilter<"hsplanpagos"> | number
    observacion?: StringNullableWithAggregatesFilter<"hsplanpagos"> | string | null
    tasacambio?: DecimalWithAggregatesFilter<"hsplanpagos"> | Decimal | DecimalJsLike | number | string
    moneda?: StringWithAggregatesFilter<"hsplanpagos"> | string
    montoneto?: DecimalWithAggregatesFilter<"hsplanpagos"> | Decimal | DecimalJsLike | number | string
    montosaldo?: DecimalWithAggregatesFilter<"hsplanpagos"> | Decimal | DecimalJsLike | number | string
    clasegasto?: StringNullableWithAggregatesFilter<"hsplanpagos"> | string | null
    owneruser?: IntWithAggregatesFilter<"hsplanpagos"> | number
  }

  export type metasWhereInput = {
    AND?: metasWhereInput | metasWhereInput[]
    OR?: metasWhereInput[]
    NOT?: metasWhereInput | metasWhereInput[]
    anio?: StringFilter<"metas"> | string
    mes?: StringFilter<"metas"> | string
    codven?: StringFilter<"metas"> | string
    codart?: StringFilter<"metas"> | string
    asignado?: IntFilter<"metas"> | number
    utilizado?: IntFilter<"metas"> | number
  }

  export type metasOrderByWithRelationInput = {
    anio?: SortOrder
    mes?: SortOrder
    codven?: SortOrder
    codart?: SortOrder
    asignado?: SortOrder
    utilizado?: SortOrder
    _relevance?: metasOrderByRelevanceInput
  }

  export type metasWhereUniqueInput = Prisma.AtLeast<{
    anio_mes_codven_codart?: metasAnioMesCodvenCodartCompoundUniqueInput
    AND?: metasWhereInput | metasWhereInput[]
    OR?: metasWhereInput[]
    NOT?: metasWhereInput | metasWhereInput[]
    anio?: StringFilter<"metas"> | string
    mes?: StringFilter<"metas"> | string
    codven?: StringFilter<"metas"> | string
    codart?: StringFilter<"metas"> | string
    asignado?: IntFilter<"metas"> | number
    utilizado?: IntFilter<"metas"> | number
  }, "anio_mes_codven_codart">

  export type metasOrderByWithAggregationInput = {
    anio?: SortOrder
    mes?: SortOrder
    codven?: SortOrder
    codart?: SortOrder
    asignado?: SortOrder
    utilizado?: SortOrder
    _count?: metasCountOrderByAggregateInput
    _avg?: metasAvgOrderByAggregateInput
    _max?: metasMaxOrderByAggregateInput
    _min?: metasMinOrderByAggregateInput
    _sum?: metasSumOrderByAggregateInput
  }

  export type metasScalarWhereWithAggregatesInput = {
    AND?: metasScalarWhereWithAggregatesInput | metasScalarWhereWithAggregatesInput[]
    OR?: metasScalarWhereWithAggregatesInput[]
    NOT?: metasScalarWhereWithAggregatesInput | metasScalarWhereWithAggregatesInput[]
    anio?: StringWithAggregatesFilter<"metas"> | string
    mes?: StringWithAggregatesFilter<"metas"> | string
    codven?: StringWithAggregatesFilter<"metas"> | string
    codart?: StringWithAggregatesFilter<"metas"> | string
    asignado?: IntWithAggregatesFilter<"metas"> | number
    utilizado?: IntWithAggregatesFilter<"metas"> | number
  }

  export type mtclientesWhereInput = {
    AND?: mtclientesWhereInput | mtclientesWhereInput[]
    OR?: mtclientesWhereInput[]
    NOT?: mtclientesWhereInput | mtclientesWhereInput[]
    codcli?: StringFilter<"mtclientes"> | string
    clides?: StringFilter<"mtclientes"> | string
    dirfiscal?: StringFilter<"mtclientes"> | string
    telefonos?: StringNullableFilter<"mtclientes"> | string | null
    comentario?: StringNullableFilter<"mtclientes"> | string | null
    contacto?: StringNullableFilter<"mtclientes"> | string | null
    fecreg?: DateTimeFilter<"mtclientes"> | Date | string
    fecultvta?: DateTimeNullableFilter<"mtclientes"> | Date | string | null
    netoultvta?: DecimalFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    montocred?: DecimalFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    diascred?: IntFilter<"mtclientes"> | number
    descppago?: DecimalFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    codzon?: StringFilter<"mtclientes"> | string
    codseg?: StringFilter<"mtclientes"> | string
    codven?: StringNullableFilter<"mtclientes"> | string | null
    descglob?: DecimalFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    direntrega?: StringNullableFilter<"mtclientes"> | string | null
    numrif?: StringFilter<"mtclientes"> | string
    tipocli?: StringFilter<"mtclientes"> | string
    tipocon?: BoolFilter<"mtclientes"> | boolean
    email?: StringNullableFilter<"mtclientes"> | string | null
    ciudad?: StringFilter<"mtclientes"> | string
    activo?: BoolFilter<"mtclientes"> | boolean
    autorizado?: BoolFilter<"mtclientes"> | boolean
    credito?: DecimalFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    saldo?: DecimalFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
  }

  export type mtclientesOrderByWithRelationInput = {
    codcli?: SortOrder
    clides?: SortOrder
    dirfiscal?: SortOrder
    telefonos?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    fecreg?: SortOrder
    fecultvta?: SortOrderInput | SortOrder
    netoultvta?: SortOrder
    montocred?: SortOrder
    diascred?: SortOrder
    descppago?: SortOrder
    codzon?: SortOrder
    codseg?: SortOrder
    codven?: SortOrderInput | SortOrder
    descglob?: SortOrder
    direntrega?: SortOrderInput | SortOrder
    numrif?: SortOrder
    tipocli?: SortOrder
    tipocon?: SortOrder
    email?: SortOrderInput | SortOrder
    ciudad?: SortOrder
    activo?: SortOrder
    autorizado?: SortOrder
    credito?: SortOrder
    saldo?: SortOrder
    _relevance?: mtclientesOrderByRelevanceInput
  }

  export type mtclientesWhereUniqueInput = Prisma.AtLeast<{
    codcli?: string
    AND?: mtclientesWhereInput | mtclientesWhereInput[]
    OR?: mtclientesWhereInput[]
    NOT?: mtclientesWhereInput | mtclientesWhereInput[]
    clides?: StringFilter<"mtclientes"> | string
    dirfiscal?: StringFilter<"mtclientes"> | string
    telefonos?: StringNullableFilter<"mtclientes"> | string | null
    comentario?: StringNullableFilter<"mtclientes"> | string | null
    contacto?: StringNullableFilter<"mtclientes"> | string | null
    fecreg?: DateTimeFilter<"mtclientes"> | Date | string
    fecultvta?: DateTimeNullableFilter<"mtclientes"> | Date | string | null
    netoultvta?: DecimalFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    montocred?: DecimalFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    diascred?: IntFilter<"mtclientes"> | number
    descppago?: DecimalFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    codzon?: StringFilter<"mtclientes"> | string
    codseg?: StringFilter<"mtclientes"> | string
    codven?: StringNullableFilter<"mtclientes"> | string | null
    descglob?: DecimalFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    direntrega?: StringNullableFilter<"mtclientes"> | string | null
    numrif?: StringFilter<"mtclientes"> | string
    tipocli?: StringFilter<"mtclientes"> | string
    tipocon?: BoolFilter<"mtclientes"> | boolean
    email?: StringNullableFilter<"mtclientes"> | string | null
    ciudad?: StringFilter<"mtclientes"> | string
    activo?: BoolFilter<"mtclientes"> | boolean
    autorizado?: BoolFilter<"mtclientes"> | boolean
    credito?: DecimalFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    saldo?: DecimalFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
  }, "codcli">

  export type mtclientesOrderByWithAggregationInput = {
    codcli?: SortOrder
    clides?: SortOrder
    dirfiscal?: SortOrder
    telefonos?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    fecreg?: SortOrder
    fecultvta?: SortOrderInput | SortOrder
    netoultvta?: SortOrder
    montocred?: SortOrder
    diascred?: SortOrder
    descppago?: SortOrder
    codzon?: SortOrder
    codseg?: SortOrder
    codven?: SortOrderInput | SortOrder
    descglob?: SortOrder
    direntrega?: SortOrderInput | SortOrder
    numrif?: SortOrder
    tipocli?: SortOrder
    tipocon?: SortOrder
    email?: SortOrderInput | SortOrder
    ciudad?: SortOrder
    activo?: SortOrder
    autorizado?: SortOrder
    credito?: SortOrder
    saldo?: SortOrder
    _count?: mtclientesCountOrderByAggregateInput
    _avg?: mtclientesAvgOrderByAggregateInput
    _max?: mtclientesMaxOrderByAggregateInput
    _min?: mtclientesMinOrderByAggregateInput
    _sum?: mtclientesSumOrderByAggregateInput
  }

  export type mtclientesScalarWhereWithAggregatesInput = {
    AND?: mtclientesScalarWhereWithAggregatesInput | mtclientesScalarWhereWithAggregatesInput[]
    OR?: mtclientesScalarWhereWithAggregatesInput[]
    NOT?: mtclientesScalarWhereWithAggregatesInput | mtclientesScalarWhereWithAggregatesInput[]
    codcli?: StringWithAggregatesFilter<"mtclientes"> | string
    clides?: StringWithAggregatesFilter<"mtclientes"> | string
    dirfiscal?: StringWithAggregatesFilter<"mtclientes"> | string
    telefonos?: StringNullableWithAggregatesFilter<"mtclientes"> | string | null
    comentario?: StringNullableWithAggregatesFilter<"mtclientes"> | string | null
    contacto?: StringNullableWithAggregatesFilter<"mtclientes"> | string | null
    fecreg?: DateTimeWithAggregatesFilter<"mtclientes"> | Date | string
    fecultvta?: DateTimeNullableWithAggregatesFilter<"mtclientes"> | Date | string | null
    netoultvta?: DecimalWithAggregatesFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    montocred?: DecimalWithAggregatesFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    diascred?: IntWithAggregatesFilter<"mtclientes"> | number
    descppago?: DecimalWithAggregatesFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    codzon?: StringWithAggregatesFilter<"mtclientes"> | string
    codseg?: StringWithAggregatesFilter<"mtclientes"> | string
    codven?: StringNullableWithAggregatesFilter<"mtclientes"> | string | null
    descglob?: DecimalWithAggregatesFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    direntrega?: StringNullableWithAggregatesFilter<"mtclientes"> | string | null
    numrif?: StringWithAggregatesFilter<"mtclientes"> | string
    tipocli?: StringWithAggregatesFilter<"mtclientes"> | string
    tipocon?: BoolWithAggregatesFilter<"mtclientes"> | boolean
    email?: StringNullableWithAggregatesFilter<"mtclientes"> | string | null
    ciudad?: StringWithAggregatesFilter<"mtclientes"> | string
    activo?: BoolWithAggregatesFilter<"mtclientes"> | boolean
    autorizado?: BoolWithAggregatesFilter<"mtclientes"> | boolean
    credito?: DecimalWithAggregatesFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
    saldo?: DecimalWithAggregatesFilter<"mtclientes"> | Decimal | DecimalJsLike | number | string
  }

  export type mtprofitartWhereInput = {
    AND?: mtprofitartWhereInput | mtprofitartWhereInput[]
    OR?: mtprofitartWhereInput[]
    NOT?: mtprofitartWhereInput | mtprofitartWhereInput[]
    codart?: StringFilter<"mtprofitart"> | string
    artdes?: StringFilter<"mtprofitart"> | string
    fecrec?: DateTimeFilter<"mtprofitart"> | Date | string
    mseriales?: BoolNullableFilter<"mtprofitart"> | boolean | null
    mlote?: BoolNullableFilter<"mtprofitart"> | boolean | null
    mgarantia?: BoolNullableFilter<"mtprofitart"> | boolean | null
    codlin?: StringFilter<"mtprofitart"> | string
    codcat?: StringFilter<"mtprofitart"> | string
    codsubl?: StringFilter<"mtprofitart"> | string
    codcolor?: StringFilter<"mtprofitart"> | string
    codbarra?: StringNullableFilter<"mtprofitart"> | string | null
    artref?: StringNullableFilter<"mtprofitart"> | string | null
    modelo?: StringFilter<"mtprofitart"> | string
    coment?: StringNullableFilter<"mtprofitart"> | string | null
    univenta?: StringFilter<"mtprofitart"> | string
    unicompra?: StringFilter<"mtprofitart"> | string
    unirelac?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    stockact?: IntFilter<"mtprofitart"> | number
    stockcom?: IntFilter<"mtprofitart"> | number
    stocklle?: IntFilter<"mtprofitart"> | number
    stockdes?: IntFilter<"mtprofitart"> | number
    suniventa?: StringFilter<"mtprofitart"> | string
    sunicompra?: StringFilter<"mtprofitart"> | string
    sunirelac?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    sstockact?: IntFilter<"mtprofitart"> | number
    sstockcom?: IntFilter<"mtprofitart"> | number
    sstocklle?: IntFilter<"mtprofitart"> | number
    sstockdes?: IntFilter<"mtprofitart"> | number
    precioom?: BoolFilter<"mtprofitart"> | boolean
    precvta1?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv1?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    precvta2?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv2?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    precvta3?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv3?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    precvta4?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv4?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    precvta5?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv5?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    fecdesp5?: DateTimeFilter<"mtprofitart"> | Date | string
    fechasp5?: DateTimeFilter<"mtprofitart"> | Date | string
    ultcosun?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fultcosun?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    cosproun?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fcosproun?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    cosunan?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fcosunan?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    ultcosunom?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fultcosunom?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    cosprounom?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fcosprounom?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    cosunanom?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fcosunanom?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    tipocosto?: StringFilter<"mtprofitart"> | string
    invfisico?: BoolFilter<"mtprofitart"> | boolean
    diasrepo?: IntFilter<"mtprofitart"> | number
    tipoart?: StringFilter<"mtprofitart"> | string
    anulado?: BoolFilter<"mtprofitart"> | boolean
    tipoimp?: StringFilter<"mtprofitart"> | string
    compuesto?: IntFilter<"mtprofitart"> | number
    peso?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    volumen?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    medalto?: IntFilter<"mtprofitart"> | number
    medancho?: IntFilter<"mtprofitart"> | number
    medlargo?: IntFilter<"mtprofitart"> | number
  }

  export type mtprofitartOrderByWithRelationInput = {
    codart?: SortOrder
    artdes?: SortOrder
    fecrec?: SortOrder
    mseriales?: SortOrderInput | SortOrder
    mlote?: SortOrderInput | SortOrder
    mgarantia?: SortOrderInput | SortOrder
    codlin?: SortOrder
    codcat?: SortOrder
    codsubl?: SortOrder
    codcolor?: SortOrder
    codbarra?: SortOrderInput | SortOrder
    artref?: SortOrderInput | SortOrder
    modelo?: SortOrder
    coment?: SortOrderInput | SortOrder
    univenta?: SortOrder
    unicompra?: SortOrder
    unirelac?: SortOrder
    stockact?: SortOrder
    stockcom?: SortOrder
    stocklle?: SortOrder
    stockdes?: SortOrder
    suniventa?: SortOrder
    sunicompra?: SortOrder
    sunirelac?: SortOrder
    sstockact?: SortOrder
    sstockcom?: SortOrder
    sstocklle?: SortOrder
    sstockdes?: SortOrder
    precioom?: SortOrder
    precvta1?: SortOrder
    fecprecv1?: SortOrderInput | SortOrder
    precvta2?: SortOrder
    fecprecv2?: SortOrderInput | SortOrder
    precvta3?: SortOrder
    fecprecv3?: SortOrderInput | SortOrder
    precvta4?: SortOrder
    fecprecv4?: SortOrderInput | SortOrder
    precvta5?: SortOrder
    fecprecv5?: SortOrderInput | SortOrder
    fecdesp5?: SortOrder
    fechasp5?: SortOrder
    ultcosun?: SortOrder
    fultcosun?: SortOrderInput | SortOrder
    cosproun?: SortOrder
    fcosproun?: SortOrderInput | SortOrder
    cosunan?: SortOrder
    fcosunan?: SortOrderInput | SortOrder
    ultcosunom?: SortOrder
    fultcosunom?: SortOrderInput | SortOrder
    cosprounom?: SortOrder
    fcosprounom?: SortOrderInput | SortOrder
    cosunanom?: SortOrder
    fcosunanom?: SortOrderInput | SortOrder
    tipocosto?: SortOrder
    invfisico?: SortOrder
    diasrepo?: SortOrder
    tipoart?: SortOrder
    anulado?: SortOrder
    tipoimp?: SortOrder
    compuesto?: SortOrder
    peso?: SortOrder
    volumen?: SortOrder
    medalto?: SortOrder
    medancho?: SortOrder
    medlargo?: SortOrder
    _relevance?: mtprofitartOrderByRelevanceInput
  }

  export type mtprofitartWhereUniqueInput = Prisma.AtLeast<{
    codart?: string
    AND?: mtprofitartWhereInput | mtprofitartWhereInput[]
    OR?: mtprofitartWhereInput[]
    NOT?: mtprofitartWhereInput | mtprofitartWhereInput[]
    artdes?: StringFilter<"mtprofitart"> | string
    fecrec?: DateTimeFilter<"mtprofitart"> | Date | string
    mseriales?: BoolNullableFilter<"mtprofitart"> | boolean | null
    mlote?: BoolNullableFilter<"mtprofitart"> | boolean | null
    mgarantia?: BoolNullableFilter<"mtprofitart"> | boolean | null
    codlin?: StringFilter<"mtprofitart"> | string
    codcat?: StringFilter<"mtprofitart"> | string
    codsubl?: StringFilter<"mtprofitart"> | string
    codcolor?: StringFilter<"mtprofitart"> | string
    codbarra?: StringNullableFilter<"mtprofitart"> | string | null
    artref?: StringNullableFilter<"mtprofitart"> | string | null
    modelo?: StringFilter<"mtprofitart"> | string
    coment?: StringNullableFilter<"mtprofitart"> | string | null
    univenta?: StringFilter<"mtprofitart"> | string
    unicompra?: StringFilter<"mtprofitart"> | string
    unirelac?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    stockact?: IntFilter<"mtprofitart"> | number
    stockcom?: IntFilter<"mtprofitart"> | number
    stocklle?: IntFilter<"mtprofitart"> | number
    stockdes?: IntFilter<"mtprofitart"> | number
    suniventa?: StringFilter<"mtprofitart"> | string
    sunicompra?: StringFilter<"mtprofitart"> | string
    sunirelac?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    sstockact?: IntFilter<"mtprofitart"> | number
    sstockcom?: IntFilter<"mtprofitart"> | number
    sstocklle?: IntFilter<"mtprofitart"> | number
    sstockdes?: IntFilter<"mtprofitart"> | number
    precioom?: BoolFilter<"mtprofitart"> | boolean
    precvta1?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv1?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    precvta2?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv2?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    precvta3?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv3?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    precvta4?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv4?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    precvta5?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv5?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    fecdesp5?: DateTimeFilter<"mtprofitart"> | Date | string
    fechasp5?: DateTimeFilter<"mtprofitart"> | Date | string
    ultcosun?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fultcosun?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    cosproun?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fcosproun?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    cosunan?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fcosunan?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    ultcosunom?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fultcosunom?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    cosprounom?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fcosprounom?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    cosunanom?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fcosunanom?: DateTimeNullableFilter<"mtprofitart"> | Date | string | null
    tipocosto?: StringFilter<"mtprofitart"> | string
    invfisico?: BoolFilter<"mtprofitart"> | boolean
    diasrepo?: IntFilter<"mtprofitart"> | number
    tipoart?: StringFilter<"mtprofitart"> | string
    anulado?: BoolFilter<"mtprofitart"> | boolean
    tipoimp?: StringFilter<"mtprofitart"> | string
    compuesto?: IntFilter<"mtprofitart"> | number
    peso?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    volumen?: DecimalFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    medalto?: IntFilter<"mtprofitart"> | number
    medancho?: IntFilter<"mtprofitart"> | number
    medlargo?: IntFilter<"mtprofitart"> | number
  }, "codart">

  export type mtprofitartOrderByWithAggregationInput = {
    codart?: SortOrder
    artdes?: SortOrder
    fecrec?: SortOrder
    mseriales?: SortOrderInput | SortOrder
    mlote?: SortOrderInput | SortOrder
    mgarantia?: SortOrderInput | SortOrder
    codlin?: SortOrder
    codcat?: SortOrder
    codsubl?: SortOrder
    codcolor?: SortOrder
    codbarra?: SortOrderInput | SortOrder
    artref?: SortOrderInput | SortOrder
    modelo?: SortOrder
    coment?: SortOrderInput | SortOrder
    univenta?: SortOrder
    unicompra?: SortOrder
    unirelac?: SortOrder
    stockact?: SortOrder
    stockcom?: SortOrder
    stocklle?: SortOrder
    stockdes?: SortOrder
    suniventa?: SortOrder
    sunicompra?: SortOrder
    sunirelac?: SortOrder
    sstockact?: SortOrder
    sstockcom?: SortOrder
    sstocklle?: SortOrder
    sstockdes?: SortOrder
    precioom?: SortOrder
    precvta1?: SortOrder
    fecprecv1?: SortOrderInput | SortOrder
    precvta2?: SortOrder
    fecprecv2?: SortOrderInput | SortOrder
    precvta3?: SortOrder
    fecprecv3?: SortOrderInput | SortOrder
    precvta4?: SortOrder
    fecprecv4?: SortOrderInput | SortOrder
    precvta5?: SortOrder
    fecprecv5?: SortOrderInput | SortOrder
    fecdesp5?: SortOrder
    fechasp5?: SortOrder
    ultcosun?: SortOrder
    fultcosun?: SortOrderInput | SortOrder
    cosproun?: SortOrder
    fcosproun?: SortOrderInput | SortOrder
    cosunan?: SortOrder
    fcosunan?: SortOrderInput | SortOrder
    ultcosunom?: SortOrder
    fultcosunom?: SortOrderInput | SortOrder
    cosprounom?: SortOrder
    fcosprounom?: SortOrderInput | SortOrder
    cosunanom?: SortOrder
    fcosunanom?: SortOrderInput | SortOrder
    tipocosto?: SortOrder
    invfisico?: SortOrder
    diasrepo?: SortOrder
    tipoart?: SortOrder
    anulado?: SortOrder
    tipoimp?: SortOrder
    compuesto?: SortOrder
    peso?: SortOrder
    volumen?: SortOrder
    medalto?: SortOrder
    medancho?: SortOrder
    medlargo?: SortOrder
    _count?: mtprofitartCountOrderByAggregateInput
    _avg?: mtprofitartAvgOrderByAggregateInput
    _max?: mtprofitartMaxOrderByAggregateInput
    _min?: mtprofitartMinOrderByAggregateInput
    _sum?: mtprofitartSumOrderByAggregateInput
  }

  export type mtprofitartScalarWhereWithAggregatesInput = {
    AND?: mtprofitartScalarWhereWithAggregatesInput | mtprofitartScalarWhereWithAggregatesInput[]
    OR?: mtprofitartScalarWhereWithAggregatesInput[]
    NOT?: mtprofitartScalarWhereWithAggregatesInput | mtprofitartScalarWhereWithAggregatesInput[]
    codart?: StringWithAggregatesFilter<"mtprofitart"> | string
    artdes?: StringWithAggregatesFilter<"mtprofitart"> | string
    fecrec?: DateTimeWithAggregatesFilter<"mtprofitart"> | Date | string
    mseriales?: BoolNullableWithAggregatesFilter<"mtprofitart"> | boolean | null
    mlote?: BoolNullableWithAggregatesFilter<"mtprofitart"> | boolean | null
    mgarantia?: BoolNullableWithAggregatesFilter<"mtprofitart"> | boolean | null
    codlin?: StringWithAggregatesFilter<"mtprofitart"> | string
    codcat?: StringWithAggregatesFilter<"mtprofitart"> | string
    codsubl?: StringWithAggregatesFilter<"mtprofitart"> | string
    codcolor?: StringWithAggregatesFilter<"mtprofitart"> | string
    codbarra?: StringNullableWithAggregatesFilter<"mtprofitart"> | string | null
    artref?: StringNullableWithAggregatesFilter<"mtprofitart"> | string | null
    modelo?: StringWithAggregatesFilter<"mtprofitart"> | string
    coment?: StringNullableWithAggregatesFilter<"mtprofitart"> | string | null
    univenta?: StringWithAggregatesFilter<"mtprofitart"> | string
    unicompra?: StringWithAggregatesFilter<"mtprofitart"> | string
    unirelac?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    stockact?: IntWithAggregatesFilter<"mtprofitart"> | number
    stockcom?: IntWithAggregatesFilter<"mtprofitart"> | number
    stocklle?: IntWithAggregatesFilter<"mtprofitart"> | number
    stockdes?: IntWithAggregatesFilter<"mtprofitart"> | number
    suniventa?: StringWithAggregatesFilter<"mtprofitart"> | string
    sunicompra?: StringWithAggregatesFilter<"mtprofitart"> | string
    sunirelac?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    sstockact?: IntWithAggregatesFilter<"mtprofitart"> | number
    sstockcom?: IntWithAggregatesFilter<"mtprofitart"> | number
    sstocklle?: IntWithAggregatesFilter<"mtprofitart"> | number
    sstockdes?: IntWithAggregatesFilter<"mtprofitart"> | number
    precioom?: BoolWithAggregatesFilter<"mtprofitart"> | boolean
    precvta1?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv1?: DateTimeNullableWithAggregatesFilter<"mtprofitart"> | Date | string | null
    precvta2?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv2?: DateTimeNullableWithAggregatesFilter<"mtprofitart"> | Date | string | null
    precvta3?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv3?: DateTimeNullableWithAggregatesFilter<"mtprofitart"> | Date | string | null
    precvta4?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv4?: DateTimeNullableWithAggregatesFilter<"mtprofitart"> | Date | string | null
    precvta5?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fecprecv5?: DateTimeNullableWithAggregatesFilter<"mtprofitart"> | Date | string | null
    fecdesp5?: DateTimeWithAggregatesFilter<"mtprofitart"> | Date | string
    fechasp5?: DateTimeWithAggregatesFilter<"mtprofitart"> | Date | string
    ultcosun?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fultcosun?: DateTimeNullableWithAggregatesFilter<"mtprofitart"> | Date | string | null
    cosproun?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fcosproun?: DateTimeNullableWithAggregatesFilter<"mtprofitart"> | Date | string | null
    cosunan?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fcosunan?: DateTimeNullableWithAggregatesFilter<"mtprofitart"> | Date | string | null
    ultcosunom?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fultcosunom?: DateTimeNullableWithAggregatesFilter<"mtprofitart"> | Date | string | null
    cosprounom?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fcosprounom?: DateTimeNullableWithAggregatesFilter<"mtprofitart"> | Date | string | null
    cosunanom?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    fcosunanom?: DateTimeNullableWithAggregatesFilter<"mtprofitart"> | Date | string | null
    tipocosto?: StringWithAggregatesFilter<"mtprofitart"> | string
    invfisico?: BoolWithAggregatesFilter<"mtprofitart"> | boolean
    diasrepo?: IntWithAggregatesFilter<"mtprofitart"> | number
    tipoart?: StringWithAggregatesFilter<"mtprofitart"> | string
    anulado?: BoolWithAggregatesFilter<"mtprofitart"> | boolean
    tipoimp?: StringWithAggregatesFilter<"mtprofitart"> | string
    compuesto?: IntWithAggregatesFilter<"mtprofitart"> | number
    peso?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    volumen?: DecimalWithAggregatesFilter<"mtprofitart"> | Decimal | DecimalJsLike | number | string
    medalto?: IntWithAggregatesFilter<"mtprofitart"> | number
    medancho?: IntWithAggregatesFilter<"mtprofitart"> | number
    medlargo?: IntWithAggregatesFilter<"mtprofitart"> | number
  }

  export type cbdevolucionesCreateInput = {
    fecha: Date | string
    estatus: number
    codcli: string
    motivo: string
    tipo: number
    chofer: string
  }

  export type cbdevolucionesUncheckedCreateInput = {
    devonum?: number
    fecha: Date | string
    estatus: number
    codcli: string
    motivo: string
    tipo: number
    chofer: string
  }

  export type cbdevolucionesUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: IntFieldUpdateOperationsInput | number
    codcli?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    tipo?: IntFieldUpdateOperationsInput | number
    chofer?: StringFieldUpdateOperationsInput | string
  }

  export type cbdevolucionesUncheckedUpdateInput = {
    devonum?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: IntFieldUpdateOperationsInput | number
    codcli?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    tipo?: IntFieldUpdateOperationsInput | number
    chofer?: StringFieldUpdateOperationsInput | string
  }

  export type cbdevolucionesCreateManyInput = {
    devonum?: number
    fecha: Date | string
    estatus: number
    codcli: string
    motivo: string
    tipo: number
    chofer: string
  }

  export type cbdevolucionesUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: IntFieldUpdateOperationsInput | number
    codcli?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    tipo?: IntFieldUpdateOperationsInput | number
    chofer?: StringFieldUpdateOperationsInput | string
  }

  export type cbdevolucionesUncheckedUpdateManyInput = {
    devonum?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: IntFieldUpdateOperationsInput | number
    codcli?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    tipo?: IntFieldUpdateOperationsInput | number
    chofer?: StringFieldUpdateOperationsInput | string
  }

  export type cbplanpagosCreateInput = {
    planpagonumero?: number
    unidad: string
    empresa: string
    fechapagoautorizada: Date | string
    descripcionplan: string
    fechaautorizadopor?: Date | string | null
    autorizadopor?: string | null
    totalnetobsd?: Decimal | DecimalJsLike | number | string
    totalnetousd?: Decimal | DecimalJsLike | number | string
    totalsaldobsd?: Decimal | DecimalJsLike | number | string
    totalsaldousd?: Decimal | DecimalJsLike | number | string
    totalautorizadobsd?: Decimal | DecimalJsLike | number | string
    totalautorizadousd?: Decimal | DecimalJsLike | number | string
    totalpagadobsd?: Decimal | DecimalJsLike | number | string
    totalpagadousd?: Decimal | DecimalJsLike | number | string
    totalxpagarbsd?: Decimal | DecimalJsLike | number | string
    totalxpagarusd?: Decimal | DecimalJsLike | number | string
    generadotxt?: boolean
    conciliadopago?: boolean
    owneruser?: number
  }

  export type cbplanpagosUncheckedCreateInput = {
    planpagonumero?: number
    unidad: string
    empresa: string
    fechapagoautorizada: Date | string
    descripcionplan: string
    fechaautorizadopor?: Date | string | null
    autorizadopor?: string | null
    totalnetobsd?: Decimal | DecimalJsLike | number | string
    totalnetousd?: Decimal | DecimalJsLike | number | string
    totalsaldobsd?: Decimal | DecimalJsLike | number | string
    totalsaldousd?: Decimal | DecimalJsLike | number | string
    totalautorizadobsd?: Decimal | DecimalJsLike | number | string
    totalautorizadousd?: Decimal | DecimalJsLike | number | string
    totalpagadobsd?: Decimal | DecimalJsLike | number | string
    totalpagadousd?: Decimal | DecimalJsLike | number | string
    totalxpagarbsd?: Decimal | DecimalJsLike | number | string
    totalxpagarusd?: Decimal | DecimalJsLike | number | string
    generadotxt?: boolean
    conciliadopago?: boolean
    owneruser?: number
  }

  export type cbplanpagosUpdateInput = {
    planpagonumero?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    fechapagoautorizada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcionplan?: StringFieldUpdateOperationsInput | string
    fechaautorizadopor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autorizadopor?: NullableStringFieldUpdateOperationsInput | string | null
    totalnetobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalnetousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalsaldobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalsaldousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalautorizadobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalautorizadousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalpagadobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalpagadousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalxpagarbsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalxpagarusd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    generadotxt?: BoolFieldUpdateOperationsInput | boolean
    conciliadopago?: BoolFieldUpdateOperationsInput | boolean
    owneruser?: IntFieldUpdateOperationsInput | number
  }

  export type cbplanpagosUncheckedUpdateInput = {
    planpagonumero?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    fechapagoautorizada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcionplan?: StringFieldUpdateOperationsInput | string
    fechaautorizadopor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autorizadopor?: NullableStringFieldUpdateOperationsInput | string | null
    totalnetobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalnetousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalsaldobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalsaldousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalautorizadobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalautorizadousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalpagadobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalpagadousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalxpagarbsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalxpagarusd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    generadotxt?: BoolFieldUpdateOperationsInput | boolean
    conciliadopago?: BoolFieldUpdateOperationsInput | boolean
    owneruser?: IntFieldUpdateOperationsInput | number
  }

  export type cbplanpagosCreateManyInput = {
    planpagonumero?: number
    unidad: string
    empresa: string
    fechapagoautorizada: Date | string
    descripcionplan: string
    fechaautorizadopor?: Date | string | null
    autorizadopor?: string | null
    totalnetobsd?: Decimal | DecimalJsLike | number | string
    totalnetousd?: Decimal | DecimalJsLike | number | string
    totalsaldobsd?: Decimal | DecimalJsLike | number | string
    totalsaldousd?: Decimal | DecimalJsLike | number | string
    totalautorizadobsd?: Decimal | DecimalJsLike | number | string
    totalautorizadousd?: Decimal | DecimalJsLike | number | string
    totalpagadobsd?: Decimal | DecimalJsLike | number | string
    totalpagadousd?: Decimal | DecimalJsLike | number | string
    totalxpagarbsd?: Decimal | DecimalJsLike | number | string
    totalxpagarusd?: Decimal | DecimalJsLike | number | string
    generadotxt?: boolean
    conciliadopago?: boolean
    owneruser?: number
  }

  export type cbplanpagosUpdateManyMutationInput = {
    planpagonumero?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    fechapagoautorizada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcionplan?: StringFieldUpdateOperationsInput | string
    fechaautorizadopor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autorizadopor?: NullableStringFieldUpdateOperationsInput | string | null
    totalnetobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalnetousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalsaldobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalsaldousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalautorizadobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalautorizadousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalpagadobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalpagadousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalxpagarbsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalxpagarusd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    generadotxt?: BoolFieldUpdateOperationsInput | boolean
    conciliadopago?: BoolFieldUpdateOperationsInput | boolean
    owneruser?: IntFieldUpdateOperationsInput | number
  }

  export type cbplanpagosUncheckedUpdateManyInput = {
    planpagonumero?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    fechapagoautorizada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcionplan?: StringFieldUpdateOperationsInput | string
    fechaautorizadopor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autorizadopor?: NullableStringFieldUpdateOperationsInput | string | null
    totalnetobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalnetousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalsaldobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalsaldousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalautorizadobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalautorizadousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalpagadobsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalpagadousd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalxpagarbsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalxpagarusd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    generadotxt?: BoolFieldUpdateOperationsInput | boolean
    conciliadopago?: BoolFieldUpdateOperationsInput | boolean
    owneruser?: IntFieldUpdateOperationsInput | number
  }

  export type cbsolicimatCreateInput = {
    solicitudnumero: number
    empresa: string
    codigoobra: string
    descripcionobra: string
    numerocontrol?: number
    solicitanteuser?: string | null
    solicitantecodigo?: string | null
    fechasolicitud: Date | string
    fechautilizacion: Date | string
    observacion: string
    actividad: string
    direccionentrega: string
    fecharevisado?: Date | string | null
    revisadopor?: string | null
    registradopor: string
    revisado?: boolean
    procesado?: boolean
    anulado?: boolean
  }

  export type cbsolicimatUncheckedCreateInput = {
    solicitudnumero: number
    empresa: string
    codigoobra: string
    descripcionobra: string
    numerocontrol?: number
    solicitanteuser?: string | null
    solicitantecodigo?: string | null
    fechasolicitud: Date | string
    fechautilizacion: Date | string
    observacion: string
    actividad: string
    direccionentrega: string
    fecharevisado?: Date | string | null
    revisadopor?: string | null
    registradopor: string
    revisado?: boolean
    procesado?: boolean
    anulado?: boolean
  }

  export type cbsolicimatUpdateInput = {
    solicitudnumero?: IntFieldUpdateOperationsInput | number
    empresa?: StringFieldUpdateOperationsInput | string
    codigoobra?: StringFieldUpdateOperationsInput | string
    descripcionobra?: StringFieldUpdateOperationsInput | string
    numerocontrol?: IntFieldUpdateOperationsInput | number
    solicitanteuser?: NullableStringFieldUpdateOperationsInput | string | null
    solicitantecodigo?: NullableStringFieldUpdateOperationsInput | string | null
    fechasolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechautilizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: StringFieldUpdateOperationsInput | string
    actividad?: StringFieldUpdateOperationsInput | string
    direccionentrega?: StringFieldUpdateOperationsInput | string
    fecharevisado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisadopor?: NullableStringFieldUpdateOperationsInput | string | null
    registradopor?: StringFieldUpdateOperationsInput | string
    revisado?: BoolFieldUpdateOperationsInput | boolean
    procesado?: BoolFieldUpdateOperationsInput | boolean
    anulado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cbsolicimatUncheckedUpdateInput = {
    solicitudnumero?: IntFieldUpdateOperationsInput | number
    empresa?: StringFieldUpdateOperationsInput | string
    codigoobra?: StringFieldUpdateOperationsInput | string
    descripcionobra?: StringFieldUpdateOperationsInput | string
    numerocontrol?: IntFieldUpdateOperationsInput | number
    solicitanteuser?: NullableStringFieldUpdateOperationsInput | string | null
    solicitantecodigo?: NullableStringFieldUpdateOperationsInput | string | null
    fechasolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechautilizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: StringFieldUpdateOperationsInput | string
    actividad?: StringFieldUpdateOperationsInput | string
    direccionentrega?: StringFieldUpdateOperationsInput | string
    fecharevisado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisadopor?: NullableStringFieldUpdateOperationsInput | string | null
    registradopor?: StringFieldUpdateOperationsInput | string
    revisado?: BoolFieldUpdateOperationsInput | boolean
    procesado?: BoolFieldUpdateOperationsInput | boolean
    anulado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cbsolicimatCreateManyInput = {
    solicitudnumero: number
    empresa: string
    codigoobra: string
    descripcionobra: string
    numerocontrol?: number
    solicitanteuser?: string | null
    solicitantecodigo?: string | null
    fechasolicitud: Date | string
    fechautilizacion: Date | string
    observacion: string
    actividad: string
    direccionentrega: string
    fecharevisado?: Date | string | null
    revisadopor?: string | null
    registradopor: string
    revisado?: boolean
    procesado?: boolean
    anulado?: boolean
  }

  export type cbsolicimatUpdateManyMutationInput = {
    solicitudnumero?: IntFieldUpdateOperationsInput | number
    empresa?: StringFieldUpdateOperationsInput | string
    codigoobra?: StringFieldUpdateOperationsInput | string
    descripcionobra?: StringFieldUpdateOperationsInput | string
    numerocontrol?: IntFieldUpdateOperationsInput | number
    solicitanteuser?: NullableStringFieldUpdateOperationsInput | string | null
    solicitantecodigo?: NullableStringFieldUpdateOperationsInput | string | null
    fechasolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechautilizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: StringFieldUpdateOperationsInput | string
    actividad?: StringFieldUpdateOperationsInput | string
    direccionentrega?: StringFieldUpdateOperationsInput | string
    fecharevisado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisadopor?: NullableStringFieldUpdateOperationsInput | string | null
    registradopor?: StringFieldUpdateOperationsInput | string
    revisado?: BoolFieldUpdateOperationsInput | boolean
    procesado?: BoolFieldUpdateOperationsInput | boolean
    anulado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cbsolicimatUncheckedUpdateManyInput = {
    solicitudnumero?: IntFieldUpdateOperationsInput | number
    empresa?: StringFieldUpdateOperationsInput | string
    codigoobra?: StringFieldUpdateOperationsInput | string
    descripcionobra?: StringFieldUpdateOperationsInput | string
    numerocontrol?: IntFieldUpdateOperationsInput | number
    solicitanteuser?: NullableStringFieldUpdateOperationsInput | string | null
    solicitantecodigo?: NullableStringFieldUpdateOperationsInput | string | null
    fechasolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechautilizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: StringFieldUpdateOperationsInput | string
    actividad?: StringFieldUpdateOperationsInput | string
    direccionentrega?: StringFieldUpdateOperationsInput | string
    fecharevisado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisadopor?: NullableStringFieldUpdateOperationsInput | string | null
    registradopor?: StringFieldUpdateOperationsInput | string
    revisado?: BoolFieldUpdateOperationsInput | boolean
    procesado?: BoolFieldUpdateOperationsInput | boolean
    anulado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type clbancoprovCreateInput = {
    beneficiario: string
    titularcuenta?: string | null
    cuentabanco?: string | null
    banco?: string | null
    codigobanco?: string | null
    codigoswift?: string | null
    tipocuenta?: string | null
    rifproveedor: string
  }

  export type clbancoprovUncheckedCreateInput = {
    numerocuenta?: number
    beneficiario: string
    titularcuenta?: string | null
    cuentabanco?: string | null
    banco?: string | null
    codigobanco?: string | null
    codigoswift?: string | null
    tipocuenta?: string | null
    rifproveedor: string
  }

  export type clbancoprovUpdateInput = {
    beneficiario?: StringFieldUpdateOperationsInput | string
    titularcuenta?: NullableStringFieldUpdateOperationsInput | string | null
    cuentabanco?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    codigobanco?: NullableStringFieldUpdateOperationsInput | string | null
    codigoswift?: NullableStringFieldUpdateOperationsInput | string | null
    tipocuenta?: NullableStringFieldUpdateOperationsInput | string | null
    rifproveedor?: StringFieldUpdateOperationsInput | string
  }

  export type clbancoprovUncheckedUpdateInput = {
    numerocuenta?: IntFieldUpdateOperationsInput | number
    beneficiario?: StringFieldUpdateOperationsInput | string
    titularcuenta?: NullableStringFieldUpdateOperationsInput | string | null
    cuentabanco?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    codigobanco?: NullableStringFieldUpdateOperationsInput | string | null
    codigoswift?: NullableStringFieldUpdateOperationsInput | string | null
    tipocuenta?: NullableStringFieldUpdateOperationsInput | string | null
    rifproveedor?: StringFieldUpdateOperationsInput | string
  }

  export type clbancoprovCreateManyInput = {
    numerocuenta?: number
    beneficiario: string
    titularcuenta?: string | null
    cuentabanco?: string | null
    banco?: string | null
    codigobanco?: string | null
    codigoswift?: string | null
    tipocuenta?: string | null
    rifproveedor: string
  }

  export type clbancoprovUpdateManyMutationInput = {
    beneficiario?: StringFieldUpdateOperationsInput | string
    titularcuenta?: NullableStringFieldUpdateOperationsInput | string | null
    cuentabanco?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    codigobanco?: NullableStringFieldUpdateOperationsInput | string | null
    codigoswift?: NullableStringFieldUpdateOperationsInput | string | null
    tipocuenta?: NullableStringFieldUpdateOperationsInput | string | null
    rifproveedor?: StringFieldUpdateOperationsInput | string
  }

  export type clbancoprovUncheckedUpdateManyInput = {
    numerocuenta?: IntFieldUpdateOperationsInput | number
    beneficiario?: StringFieldUpdateOperationsInput | string
    titularcuenta?: NullableStringFieldUpdateOperationsInput | string | null
    cuentabanco?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    codigobanco?: NullableStringFieldUpdateOperationsInput | string | null
    codigoswift?: NullableStringFieldUpdateOperationsInput | string | null
    tipocuenta?: NullableStringFieldUpdateOperationsInput | string | null
    rifproveedor?: StringFieldUpdateOperationsInput | string
  }

  export type clbancoswiftCreateInput = {
    codigobanco: string
    codigoswift: string
    nombrecorto: string
    tipocuenta?: string
  }

  export type clbancoswiftUncheckedCreateInput = {
    codigobanco: string
    codigoswift: string
    nombrecorto: string
    tipocuenta?: string
  }

  export type clbancoswiftUpdateInput = {
    codigobanco?: StringFieldUpdateOperationsInput | string
    codigoswift?: StringFieldUpdateOperationsInput | string
    nombrecorto?: StringFieldUpdateOperationsInput | string
    tipocuenta?: StringFieldUpdateOperationsInput | string
  }

  export type clbancoswiftUncheckedUpdateInput = {
    codigobanco?: StringFieldUpdateOperationsInput | string
    codigoswift?: StringFieldUpdateOperationsInput | string
    nombrecorto?: StringFieldUpdateOperationsInput | string
    tipocuenta?: StringFieldUpdateOperationsInput | string
  }

  export type clbancoswiftCreateManyInput = {
    codigobanco: string
    codigoswift: string
    nombrecorto: string
    tipocuenta?: string
  }

  export type clbancoswiftUpdateManyMutationInput = {
    codigobanco?: StringFieldUpdateOperationsInput | string
    codigoswift?: StringFieldUpdateOperationsInput | string
    nombrecorto?: StringFieldUpdateOperationsInput | string
    tipocuenta?: StringFieldUpdateOperationsInput | string
  }

  export type clbancoswiftUncheckedUpdateManyInput = {
    codigobanco?: StringFieldUpdateOperationsInput | string
    codigoswift?: StringFieldUpdateOperationsInput | string
    nombrecorto?: StringFieldUpdateOperationsInput | string
    tipocuenta?: StringFieldUpdateOperationsInput | string
  }

  export type clcategoriaCreateInput = {
    codcat: string
    catdes: string
  }

  export type clcategoriaUncheckedCreateInput = {
    codcat: string
    catdes: string
  }

  export type clcategoriaUpdateInput = {
    codcat?: StringFieldUpdateOperationsInput | string
    catdes?: StringFieldUpdateOperationsInput | string
  }

  export type clcategoriaUncheckedUpdateInput = {
    codcat?: StringFieldUpdateOperationsInput | string
    catdes?: StringFieldUpdateOperationsInput | string
  }

  export type clcategoriaCreateManyInput = {
    codcat: string
    catdes: string
  }

  export type clcategoriaUpdateManyMutationInput = {
    codcat?: StringFieldUpdateOperationsInput | string
    catdes?: StringFieldUpdateOperationsInput | string
  }

  export type clcategoriaUncheckedUpdateManyInput = {
    codcat?: StringFieldUpdateOperationsInput | string
    catdes?: StringFieldUpdateOperationsInput | string
  }

  export type cltransporteCreateInput = {
    codtran: string
    trandes: string
    chofer?: string | null
  }

  export type cltransporteUncheckedCreateInput = {
    codtran: string
    trandes: string
    chofer?: string | null
  }

  export type cltransporteUpdateInput = {
    codtran?: StringFieldUpdateOperationsInput | string
    trandes?: StringFieldUpdateOperationsInput | string
    chofer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cltransporteUncheckedUpdateInput = {
    codtran?: StringFieldUpdateOperationsInput | string
    trandes?: StringFieldUpdateOperationsInput | string
    chofer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cltransporteCreateManyInput = {
    codtran: string
    trandes: string
    chofer?: string | null
  }

  export type cltransporteUpdateManyMutationInput = {
    codtran?: StringFieldUpdateOperationsInput | string
    trandes?: StringFieldUpdateOperationsInput | string
    chofer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cltransporteUncheckedUpdateManyInput = {
    codtran?: StringFieldUpdateOperationsInput | string
    trandes?: StringFieldUpdateOperationsInput | string
    chofer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clzonasCreateInput = {
    codzon: string
    zondes: string
  }

  export type clzonasUncheckedCreateInput = {
    codzon: string
    zondes: string
  }

  export type clzonasUpdateInput = {
    codzon?: StringFieldUpdateOperationsInput | string
    zondes?: StringFieldUpdateOperationsInput | string
  }

  export type clzonasUncheckedUpdateInput = {
    codzon?: StringFieldUpdateOperationsInput | string
    zondes?: StringFieldUpdateOperationsInput | string
  }

  export type clzonasCreateManyInput = {
    codzon: string
    zondes: string
  }

  export type clzonasUpdateManyMutationInput = {
    codzon?: StringFieldUpdateOperationsInput | string
    zondes?: StringFieldUpdateOperationsInput | string
  }

  export type clzonasUncheckedUpdateManyInput = {
    codzon?: StringFieldUpdateOperationsInput | string
    zondes?: StringFieldUpdateOperationsInput | string
  }

  export type dtdevolucionCreateInput = {
    devnum?: number
    estatus?: string
    comentario?: string | null
    descrip: string
    saldo: Decimal | DecimalJsLike | number | string
    fecemis: Date | string
    fecvenc: Date | string
    codcli: string
    codven: string
    codtran: string
  }

  export type dtdevolucionUncheckedCreateInput = {
    devnum?: number
    estatus?: string
    comentario?: string | null
    descrip: string
    saldo: Decimal | DecimalJsLike | number | string
    fecemis: Date | string
    fecvenc: Date | string
    codcli: string
    codven: string
    codtran: string
  }

  export type dtdevolucionUpdateInput = {
    devnum?: IntFieldUpdateOperationsInput | number
    estatus?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    descrip?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecemis?: DateTimeFieldUpdateOperationsInput | Date | string
    fecvenc?: DateTimeFieldUpdateOperationsInput | Date | string
    codcli?: StringFieldUpdateOperationsInput | string
    codven?: StringFieldUpdateOperationsInput | string
    codtran?: StringFieldUpdateOperationsInput | string
  }

  export type dtdevolucionUncheckedUpdateInput = {
    devnum?: IntFieldUpdateOperationsInput | number
    estatus?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    descrip?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecemis?: DateTimeFieldUpdateOperationsInput | Date | string
    fecvenc?: DateTimeFieldUpdateOperationsInput | Date | string
    codcli?: StringFieldUpdateOperationsInput | string
    codven?: StringFieldUpdateOperationsInput | string
    codtran?: StringFieldUpdateOperationsInput | string
  }

  export type dtdevolucionCreateManyInput = {
    devnum?: number
    estatus?: string
    comentario?: string | null
    descrip: string
    saldo: Decimal | DecimalJsLike | number | string
    fecemis: Date | string
    fecvenc: Date | string
    codcli: string
    codven: string
    codtran: string
  }

  export type dtdevolucionUpdateManyMutationInput = {
    devnum?: IntFieldUpdateOperationsInput | number
    estatus?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    descrip?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecemis?: DateTimeFieldUpdateOperationsInput | Date | string
    fecvenc?: DateTimeFieldUpdateOperationsInput | Date | string
    codcli?: StringFieldUpdateOperationsInput | string
    codven?: StringFieldUpdateOperationsInput | string
    codtran?: StringFieldUpdateOperationsInput | string
  }

  export type dtdevolucionUncheckedUpdateManyInput = {
    devnum?: IntFieldUpdateOperationsInput | number
    estatus?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    descrip?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecemis?: DateTimeFieldUpdateOperationsInput | Date | string
    fecvenc?: DateTimeFieldUpdateOperationsInput | Date | string
    codcli?: StringFieldUpdateOperationsInput | string
    codven?: StringFieldUpdateOperationsInput | string
    codtran?: StringFieldUpdateOperationsInput | string
  }

  export type dtdevolucionesCreateInput = {
    itemnum?: number
    devonum: number
    codart: string
    serial: string
    descripcion: string
    cantidad: number
  }

  export type dtdevolucionesUncheckedCreateInput = {
    itemnum?: number
    devonum: number
    codart: string
    serial: string
    descripcion: string
    cantidad: number
  }

  export type dtdevolucionesUpdateInput = {
    itemnum?: IntFieldUpdateOperationsInput | number
    devonum?: IntFieldUpdateOperationsInput | number
    codart?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type dtdevolucionesUncheckedUpdateInput = {
    itemnum?: IntFieldUpdateOperationsInput | number
    devonum?: IntFieldUpdateOperationsInput | number
    codart?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type dtdevolucionesCreateManyInput = {
    itemnum?: number
    devonum: number
    codart: string
    serial: string
    descripcion: string
    cantidad: number
  }

  export type dtdevolucionesUpdateManyMutationInput = {
    itemnum?: IntFieldUpdateOperationsInput | number
    devonum?: IntFieldUpdateOperationsInput | number
    codart?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type dtdevolucionesUncheckedUpdateManyInput = {
    itemnum?: IntFieldUpdateOperationsInput | number
    devonum?: IntFieldUpdateOperationsInput | number
    codart?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type hsplanpagosCreateInput = {
    unidad: string
    empresa: string
    tipodocumento: string
    codigobeneficiario?: string | null
    beneficiario: string
    cuentabanco?: string | null
    banco?: string | null
    rifproveedor?: string | null
    tipoproveedor: string
    monedaproveedor?: string | null
    autorizadopagar?: boolean
    fechaemision: Date | string
    fechavencimiento: Date | string
    fecharegistro: Date | string
    registradopor: string
    numerofactura?: number
    observacion?: string | null
    tasacambio?: Decimal | DecimalJsLike | number | string
    moneda: string
    montoneto?: Decimal | DecimalJsLike | number | string
    montosaldo?: Decimal | DecimalJsLike | number | string
    clasegasto?: string | null
    owneruser?: number
  }

  export type hsplanpagosUncheckedCreateInput = {
    unidad: string
    empresa: string
    tipodocumento: string
    numerodocumento?: number
    codigobeneficiario?: string | null
    beneficiario: string
    cuentabanco?: string | null
    banco?: string | null
    rifproveedor?: string | null
    tipoproveedor: string
    monedaproveedor?: string | null
    autorizadopagar?: boolean
    fechaemision: Date | string
    fechavencimiento: Date | string
    fecharegistro: Date | string
    registradopor: string
    numerofactura?: number
    observacion?: string | null
    tasacambio?: Decimal | DecimalJsLike | number | string
    moneda: string
    montoneto?: Decimal | DecimalJsLike | number | string
    montosaldo?: Decimal | DecimalJsLike | number | string
    clasegasto?: string | null
    owneruser?: number
  }

  export type hsplanpagosUpdateInput = {
    unidad?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    tipodocumento?: StringFieldUpdateOperationsInput | string
    codigobeneficiario?: NullableStringFieldUpdateOperationsInput | string | null
    beneficiario?: StringFieldUpdateOperationsInput | string
    cuentabanco?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    rifproveedor?: NullableStringFieldUpdateOperationsInput | string | null
    tipoproveedor?: StringFieldUpdateOperationsInput | string
    monedaproveedor?: NullableStringFieldUpdateOperationsInput | string | null
    autorizadopagar?: BoolFieldUpdateOperationsInput | boolean
    fechaemision?: DateTimeFieldUpdateOperationsInput | Date | string
    fechavencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecharegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    registradopor?: StringFieldUpdateOperationsInput | string
    numerofactura?: IntFieldUpdateOperationsInput | number
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    tasacambio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moneda?: StringFieldUpdateOperationsInput | string
    montoneto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montosaldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clasegasto?: NullableStringFieldUpdateOperationsInput | string | null
    owneruser?: IntFieldUpdateOperationsInput | number
  }

  export type hsplanpagosUncheckedUpdateInput = {
    unidad?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    tipodocumento?: StringFieldUpdateOperationsInput | string
    numerodocumento?: IntFieldUpdateOperationsInput | number
    codigobeneficiario?: NullableStringFieldUpdateOperationsInput | string | null
    beneficiario?: StringFieldUpdateOperationsInput | string
    cuentabanco?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    rifproveedor?: NullableStringFieldUpdateOperationsInput | string | null
    tipoproveedor?: StringFieldUpdateOperationsInput | string
    monedaproveedor?: NullableStringFieldUpdateOperationsInput | string | null
    autorizadopagar?: BoolFieldUpdateOperationsInput | boolean
    fechaemision?: DateTimeFieldUpdateOperationsInput | Date | string
    fechavencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecharegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    registradopor?: StringFieldUpdateOperationsInput | string
    numerofactura?: IntFieldUpdateOperationsInput | number
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    tasacambio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moneda?: StringFieldUpdateOperationsInput | string
    montoneto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montosaldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clasegasto?: NullableStringFieldUpdateOperationsInput | string | null
    owneruser?: IntFieldUpdateOperationsInput | number
  }

  export type hsplanpagosCreateManyInput = {
    unidad: string
    empresa: string
    tipodocumento: string
    numerodocumento?: number
    codigobeneficiario?: string | null
    beneficiario: string
    cuentabanco?: string | null
    banco?: string | null
    rifproveedor?: string | null
    tipoproveedor: string
    monedaproveedor?: string | null
    autorizadopagar?: boolean
    fechaemision: Date | string
    fechavencimiento: Date | string
    fecharegistro: Date | string
    registradopor: string
    numerofactura?: number
    observacion?: string | null
    tasacambio?: Decimal | DecimalJsLike | number | string
    moneda: string
    montoneto?: Decimal | DecimalJsLike | number | string
    montosaldo?: Decimal | DecimalJsLike | number | string
    clasegasto?: string | null
    owneruser?: number
  }

  export type hsplanpagosUpdateManyMutationInput = {
    unidad?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    tipodocumento?: StringFieldUpdateOperationsInput | string
    codigobeneficiario?: NullableStringFieldUpdateOperationsInput | string | null
    beneficiario?: StringFieldUpdateOperationsInput | string
    cuentabanco?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    rifproveedor?: NullableStringFieldUpdateOperationsInput | string | null
    tipoproveedor?: StringFieldUpdateOperationsInput | string
    monedaproveedor?: NullableStringFieldUpdateOperationsInput | string | null
    autorizadopagar?: BoolFieldUpdateOperationsInput | boolean
    fechaemision?: DateTimeFieldUpdateOperationsInput | Date | string
    fechavencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecharegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    registradopor?: StringFieldUpdateOperationsInput | string
    numerofactura?: IntFieldUpdateOperationsInput | number
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    tasacambio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moneda?: StringFieldUpdateOperationsInput | string
    montoneto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montosaldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clasegasto?: NullableStringFieldUpdateOperationsInput | string | null
    owneruser?: IntFieldUpdateOperationsInput | number
  }

  export type hsplanpagosUncheckedUpdateManyInput = {
    unidad?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    tipodocumento?: StringFieldUpdateOperationsInput | string
    numerodocumento?: IntFieldUpdateOperationsInput | number
    codigobeneficiario?: NullableStringFieldUpdateOperationsInput | string | null
    beneficiario?: StringFieldUpdateOperationsInput | string
    cuentabanco?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    rifproveedor?: NullableStringFieldUpdateOperationsInput | string | null
    tipoproveedor?: StringFieldUpdateOperationsInput | string
    monedaproveedor?: NullableStringFieldUpdateOperationsInput | string | null
    autorizadopagar?: BoolFieldUpdateOperationsInput | boolean
    fechaemision?: DateTimeFieldUpdateOperationsInput | Date | string
    fechavencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecharegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    registradopor?: StringFieldUpdateOperationsInput | string
    numerofactura?: IntFieldUpdateOperationsInput | number
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    tasacambio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moneda?: StringFieldUpdateOperationsInput | string
    montoneto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montosaldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clasegasto?: NullableStringFieldUpdateOperationsInput | string | null
    owneruser?: IntFieldUpdateOperationsInput | number
  }

  export type metasCreateInput = {
    anio: string
    mes: string
    codven: string
    codart: string
    asignado?: number
    utilizado?: number
  }

  export type metasUncheckedCreateInput = {
    anio: string
    mes: string
    codven: string
    codart: string
    asignado?: number
    utilizado?: number
  }

  export type metasUpdateInput = {
    anio?: StringFieldUpdateOperationsInput | string
    mes?: StringFieldUpdateOperationsInput | string
    codven?: StringFieldUpdateOperationsInput | string
    codart?: StringFieldUpdateOperationsInput | string
    asignado?: IntFieldUpdateOperationsInput | number
    utilizado?: IntFieldUpdateOperationsInput | number
  }

  export type metasUncheckedUpdateInput = {
    anio?: StringFieldUpdateOperationsInput | string
    mes?: StringFieldUpdateOperationsInput | string
    codven?: StringFieldUpdateOperationsInput | string
    codart?: StringFieldUpdateOperationsInput | string
    asignado?: IntFieldUpdateOperationsInput | number
    utilizado?: IntFieldUpdateOperationsInput | number
  }

  export type metasCreateManyInput = {
    anio: string
    mes: string
    codven: string
    codart: string
    asignado?: number
    utilizado?: number
  }

  export type metasUpdateManyMutationInput = {
    anio?: StringFieldUpdateOperationsInput | string
    mes?: StringFieldUpdateOperationsInput | string
    codven?: StringFieldUpdateOperationsInput | string
    codart?: StringFieldUpdateOperationsInput | string
    asignado?: IntFieldUpdateOperationsInput | number
    utilizado?: IntFieldUpdateOperationsInput | number
  }

  export type metasUncheckedUpdateManyInput = {
    anio?: StringFieldUpdateOperationsInput | string
    mes?: StringFieldUpdateOperationsInput | string
    codven?: StringFieldUpdateOperationsInput | string
    codart?: StringFieldUpdateOperationsInput | string
    asignado?: IntFieldUpdateOperationsInput | number
    utilizado?: IntFieldUpdateOperationsInput | number
  }

  export type mtclientesCreateInput = {
    codcli: string
    clides: string
    dirfiscal: string
    telefonos?: string | null
    comentario?: string | null
    contacto?: string | null
    fecreg: Date | string
    fecultvta?: Date | string | null
    netoultvta?: Decimal | DecimalJsLike | number | string
    montocred?: Decimal | DecimalJsLike | number | string
    diascred: number
    descppago?: Decimal | DecimalJsLike | number | string
    codzon: string
    codseg: string
    codven?: string | null
    descglob?: Decimal | DecimalJsLike | number | string
    direntrega?: string | null
    numrif: string
    tipocli: string
    tipocon: boolean
    email?: string | null
    ciudad: string
    activo?: boolean
    autorizado?: boolean
    credito?: Decimal | DecimalJsLike | number | string
    saldo?: Decimal | DecimalJsLike | number | string
  }

  export type mtclientesUncheckedCreateInput = {
    codcli: string
    clides: string
    dirfiscal: string
    telefonos?: string | null
    comentario?: string | null
    contacto?: string | null
    fecreg: Date | string
    fecultvta?: Date | string | null
    netoultvta?: Decimal | DecimalJsLike | number | string
    montocred?: Decimal | DecimalJsLike | number | string
    diascred: number
    descppago?: Decimal | DecimalJsLike | number | string
    codzon: string
    codseg: string
    codven?: string | null
    descglob?: Decimal | DecimalJsLike | number | string
    direntrega?: string | null
    numrif: string
    tipocli: string
    tipocon: boolean
    email?: string | null
    ciudad: string
    activo?: boolean
    autorizado?: boolean
    credito?: Decimal | DecimalJsLike | number | string
    saldo?: Decimal | DecimalJsLike | number | string
  }

  export type mtclientesUpdateInput = {
    codcli?: StringFieldUpdateOperationsInput | string
    clides?: StringFieldUpdateOperationsInput | string
    dirfiscal?: StringFieldUpdateOperationsInput | string
    telefonos?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    fecreg?: DateTimeFieldUpdateOperationsInput | Date | string
    fecultvta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    netoultvta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montocred?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diascred?: IntFieldUpdateOperationsInput | number
    descppago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codzon?: StringFieldUpdateOperationsInput | string
    codseg?: StringFieldUpdateOperationsInput | string
    codven?: NullableStringFieldUpdateOperationsInput | string | null
    descglob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direntrega?: NullableStringFieldUpdateOperationsInput | string | null
    numrif?: StringFieldUpdateOperationsInput | string
    tipocli?: StringFieldUpdateOperationsInput | string
    tipocon?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    autorizado?: BoolFieldUpdateOperationsInput | boolean
    credito?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type mtclientesUncheckedUpdateInput = {
    codcli?: StringFieldUpdateOperationsInput | string
    clides?: StringFieldUpdateOperationsInput | string
    dirfiscal?: StringFieldUpdateOperationsInput | string
    telefonos?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    fecreg?: DateTimeFieldUpdateOperationsInput | Date | string
    fecultvta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    netoultvta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montocred?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diascred?: IntFieldUpdateOperationsInput | number
    descppago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codzon?: StringFieldUpdateOperationsInput | string
    codseg?: StringFieldUpdateOperationsInput | string
    codven?: NullableStringFieldUpdateOperationsInput | string | null
    descglob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direntrega?: NullableStringFieldUpdateOperationsInput | string | null
    numrif?: StringFieldUpdateOperationsInput | string
    tipocli?: StringFieldUpdateOperationsInput | string
    tipocon?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    autorizado?: BoolFieldUpdateOperationsInput | boolean
    credito?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type mtclientesCreateManyInput = {
    codcli: string
    clides: string
    dirfiscal: string
    telefonos?: string | null
    comentario?: string | null
    contacto?: string | null
    fecreg: Date | string
    fecultvta?: Date | string | null
    netoultvta?: Decimal | DecimalJsLike | number | string
    montocred?: Decimal | DecimalJsLike | number | string
    diascred: number
    descppago?: Decimal | DecimalJsLike | number | string
    codzon: string
    codseg: string
    codven?: string | null
    descglob?: Decimal | DecimalJsLike | number | string
    direntrega?: string | null
    numrif: string
    tipocli: string
    tipocon: boolean
    email?: string | null
    ciudad: string
    activo?: boolean
    autorizado?: boolean
    credito?: Decimal | DecimalJsLike | number | string
    saldo?: Decimal | DecimalJsLike | number | string
  }

  export type mtclientesUpdateManyMutationInput = {
    codcli?: StringFieldUpdateOperationsInput | string
    clides?: StringFieldUpdateOperationsInput | string
    dirfiscal?: StringFieldUpdateOperationsInput | string
    telefonos?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    fecreg?: DateTimeFieldUpdateOperationsInput | Date | string
    fecultvta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    netoultvta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montocred?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diascred?: IntFieldUpdateOperationsInput | number
    descppago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codzon?: StringFieldUpdateOperationsInput | string
    codseg?: StringFieldUpdateOperationsInput | string
    codven?: NullableStringFieldUpdateOperationsInput | string | null
    descglob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direntrega?: NullableStringFieldUpdateOperationsInput | string | null
    numrif?: StringFieldUpdateOperationsInput | string
    tipocli?: StringFieldUpdateOperationsInput | string
    tipocon?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    autorizado?: BoolFieldUpdateOperationsInput | boolean
    credito?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type mtclientesUncheckedUpdateManyInput = {
    codcli?: StringFieldUpdateOperationsInput | string
    clides?: StringFieldUpdateOperationsInput | string
    dirfiscal?: StringFieldUpdateOperationsInput | string
    telefonos?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    fecreg?: DateTimeFieldUpdateOperationsInput | Date | string
    fecultvta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    netoultvta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montocred?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diascred?: IntFieldUpdateOperationsInput | number
    descppago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codzon?: StringFieldUpdateOperationsInput | string
    codseg?: StringFieldUpdateOperationsInput | string
    codven?: NullableStringFieldUpdateOperationsInput | string | null
    descglob?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direntrega?: NullableStringFieldUpdateOperationsInput | string | null
    numrif?: StringFieldUpdateOperationsInput | string
    tipocli?: StringFieldUpdateOperationsInput | string
    tipocon?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    autorizado?: BoolFieldUpdateOperationsInput | boolean
    credito?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type mtprofitartCreateInput = {
    codart: string
    artdes: string
    fecrec: Date | string
    mseriales?: boolean | null
    mlote?: boolean | null
    mgarantia?: boolean | null
    codlin: string
    codcat: string
    codsubl: string
    codcolor: string
    codbarra?: string | null
    artref?: string | null
    modelo: string
    coment?: string | null
    univenta: string
    unicompra: string
    unirelac?: Decimal | DecimalJsLike | number | string
    stockact?: number
    stockcom?: number
    stocklle?: number
    stockdes?: number
    suniventa: string
    sunicompra: string
    sunirelac?: Decimal | DecimalJsLike | number | string
    sstockact?: number
    sstockcom?: number
    sstocklle?: number
    sstockdes?: number
    precioom?: boolean
    precvta1?: Decimal | DecimalJsLike | number | string
    fecprecv1?: Date | string | null
    precvta2?: Decimal | DecimalJsLike | number | string
    fecprecv2?: Date | string | null
    precvta3: Decimal | DecimalJsLike | number | string
    fecprecv3?: Date | string | null
    precvta4: Decimal | DecimalJsLike | number | string
    fecprecv4?: Date | string | null
    precvta5: Decimal | DecimalJsLike | number | string
    fecprecv5?: Date | string | null
    fecdesp5: Date | string
    fechasp5: Date | string
    ultcosun?: Decimal | DecimalJsLike | number | string
    fultcosun?: Date | string | null
    cosproun?: Decimal | DecimalJsLike | number | string
    fcosproun?: Date | string | null
    cosunan?: Decimal | DecimalJsLike | number | string
    fcosunan?: Date | string | null
    ultcosunom?: Decimal | DecimalJsLike | number | string
    fultcosunom?: Date | string | null
    cosprounom?: Decimal | DecimalJsLike | number | string
    fcosprounom?: Date | string | null
    cosunanom?: Decimal | DecimalJsLike | number | string
    fcosunanom?: Date | string | null
    tipocosto: string
    invfisico?: boolean
    diasrepo?: number
    tipoart: string
    anulado?: boolean
    tipoimp: string
    compuesto?: number
    peso?: Decimal | DecimalJsLike | number | string
    volumen?: Decimal | DecimalJsLike | number | string
    medalto?: number
    medancho?: number
    medlargo?: number
  }

  export type mtprofitartUncheckedCreateInput = {
    codart: string
    artdes: string
    fecrec: Date | string
    mseriales?: boolean | null
    mlote?: boolean | null
    mgarantia?: boolean | null
    codlin: string
    codcat: string
    codsubl: string
    codcolor: string
    codbarra?: string | null
    artref?: string | null
    modelo: string
    coment?: string | null
    univenta: string
    unicompra: string
    unirelac?: Decimal | DecimalJsLike | number | string
    stockact?: number
    stockcom?: number
    stocklle?: number
    stockdes?: number
    suniventa: string
    sunicompra: string
    sunirelac?: Decimal | DecimalJsLike | number | string
    sstockact?: number
    sstockcom?: number
    sstocklle?: number
    sstockdes?: number
    precioom?: boolean
    precvta1?: Decimal | DecimalJsLike | number | string
    fecprecv1?: Date | string | null
    precvta2?: Decimal | DecimalJsLike | number | string
    fecprecv2?: Date | string | null
    precvta3: Decimal | DecimalJsLike | number | string
    fecprecv3?: Date | string | null
    precvta4: Decimal | DecimalJsLike | number | string
    fecprecv4?: Date | string | null
    precvta5: Decimal | DecimalJsLike | number | string
    fecprecv5?: Date | string | null
    fecdesp5: Date | string
    fechasp5: Date | string
    ultcosun?: Decimal | DecimalJsLike | number | string
    fultcosun?: Date | string | null
    cosproun?: Decimal | DecimalJsLike | number | string
    fcosproun?: Date | string | null
    cosunan?: Decimal | DecimalJsLike | number | string
    fcosunan?: Date | string | null
    ultcosunom?: Decimal | DecimalJsLike | number | string
    fultcosunom?: Date | string | null
    cosprounom?: Decimal | DecimalJsLike | number | string
    fcosprounom?: Date | string | null
    cosunanom?: Decimal | DecimalJsLike | number | string
    fcosunanom?: Date | string | null
    tipocosto: string
    invfisico?: boolean
    diasrepo?: number
    tipoart: string
    anulado?: boolean
    tipoimp: string
    compuesto?: number
    peso?: Decimal | DecimalJsLike | number | string
    volumen?: Decimal | DecimalJsLike | number | string
    medalto?: number
    medancho?: number
    medlargo?: number
  }

  export type mtprofitartUpdateInput = {
    codart?: StringFieldUpdateOperationsInput | string
    artdes?: StringFieldUpdateOperationsInput | string
    fecrec?: DateTimeFieldUpdateOperationsInput | Date | string
    mseriales?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mlote?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mgarantia?: NullableBoolFieldUpdateOperationsInput | boolean | null
    codlin?: StringFieldUpdateOperationsInput | string
    codcat?: StringFieldUpdateOperationsInput | string
    codsubl?: StringFieldUpdateOperationsInput | string
    codcolor?: StringFieldUpdateOperationsInput | string
    codbarra?: NullableStringFieldUpdateOperationsInput | string | null
    artref?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: StringFieldUpdateOperationsInput | string
    coment?: NullableStringFieldUpdateOperationsInput | string | null
    univenta?: StringFieldUpdateOperationsInput | string
    unicompra?: StringFieldUpdateOperationsInput | string
    unirelac?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockact?: IntFieldUpdateOperationsInput | number
    stockcom?: IntFieldUpdateOperationsInput | number
    stocklle?: IntFieldUpdateOperationsInput | number
    stockdes?: IntFieldUpdateOperationsInput | number
    suniventa?: StringFieldUpdateOperationsInput | string
    sunicompra?: StringFieldUpdateOperationsInput | string
    sunirelac?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sstockact?: IntFieldUpdateOperationsInput | number
    sstockcom?: IntFieldUpdateOperationsInput | number
    sstocklle?: IntFieldUpdateOperationsInput | number
    sstockdes?: IntFieldUpdateOperationsInput | number
    precioom?: BoolFieldUpdateOperationsInput | boolean
    precvta1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv1?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv2?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv3?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta4?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv4?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv5?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecdesp5?: DateTimeFieldUpdateOperationsInput | Date | string
    fechasp5?: DateTimeFieldUpdateOperationsInput | Date | string
    ultcosun?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fultcosun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosproun?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosproun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosunan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosunan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultcosunom?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fultcosunom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosprounom?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosprounom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosunanom?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosunanom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipocosto?: StringFieldUpdateOperationsInput | string
    invfisico?: BoolFieldUpdateOperationsInput | boolean
    diasrepo?: IntFieldUpdateOperationsInput | number
    tipoart?: StringFieldUpdateOperationsInput | string
    anulado?: BoolFieldUpdateOperationsInput | boolean
    tipoimp?: StringFieldUpdateOperationsInput | string
    compuesto?: IntFieldUpdateOperationsInput | number
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volumen?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    medalto?: IntFieldUpdateOperationsInput | number
    medancho?: IntFieldUpdateOperationsInput | number
    medlargo?: IntFieldUpdateOperationsInput | number
  }

  export type mtprofitartUncheckedUpdateInput = {
    codart?: StringFieldUpdateOperationsInput | string
    artdes?: StringFieldUpdateOperationsInput | string
    fecrec?: DateTimeFieldUpdateOperationsInput | Date | string
    mseriales?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mlote?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mgarantia?: NullableBoolFieldUpdateOperationsInput | boolean | null
    codlin?: StringFieldUpdateOperationsInput | string
    codcat?: StringFieldUpdateOperationsInput | string
    codsubl?: StringFieldUpdateOperationsInput | string
    codcolor?: StringFieldUpdateOperationsInput | string
    codbarra?: NullableStringFieldUpdateOperationsInput | string | null
    artref?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: StringFieldUpdateOperationsInput | string
    coment?: NullableStringFieldUpdateOperationsInput | string | null
    univenta?: StringFieldUpdateOperationsInput | string
    unicompra?: StringFieldUpdateOperationsInput | string
    unirelac?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockact?: IntFieldUpdateOperationsInput | number
    stockcom?: IntFieldUpdateOperationsInput | number
    stocklle?: IntFieldUpdateOperationsInput | number
    stockdes?: IntFieldUpdateOperationsInput | number
    suniventa?: StringFieldUpdateOperationsInput | string
    sunicompra?: StringFieldUpdateOperationsInput | string
    sunirelac?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sstockact?: IntFieldUpdateOperationsInput | number
    sstockcom?: IntFieldUpdateOperationsInput | number
    sstocklle?: IntFieldUpdateOperationsInput | number
    sstockdes?: IntFieldUpdateOperationsInput | number
    precioom?: BoolFieldUpdateOperationsInput | boolean
    precvta1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv1?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv2?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv3?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta4?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv4?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv5?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecdesp5?: DateTimeFieldUpdateOperationsInput | Date | string
    fechasp5?: DateTimeFieldUpdateOperationsInput | Date | string
    ultcosun?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fultcosun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosproun?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosproun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosunan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosunan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultcosunom?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fultcosunom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosprounom?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosprounom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosunanom?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosunanom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipocosto?: StringFieldUpdateOperationsInput | string
    invfisico?: BoolFieldUpdateOperationsInput | boolean
    diasrepo?: IntFieldUpdateOperationsInput | number
    tipoart?: StringFieldUpdateOperationsInput | string
    anulado?: BoolFieldUpdateOperationsInput | boolean
    tipoimp?: StringFieldUpdateOperationsInput | string
    compuesto?: IntFieldUpdateOperationsInput | number
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volumen?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    medalto?: IntFieldUpdateOperationsInput | number
    medancho?: IntFieldUpdateOperationsInput | number
    medlargo?: IntFieldUpdateOperationsInput | number
  }

  export type mtprofitartCreateManyInput = {
    codart: string
    artdes: string
    fecrec: Date | string
    mseriales?: boolean | null
    mlote?: boolean | null
    mgarantia?: boolean | null
    codlin: string
    codcat: string
    codsubl: string
    codcolor: string
    codbarra?: string | null
    artref?: string | null
    modelo: string
    coment?: string | null
    univenta: string
    unicompra: string
    unirelac?: Decimal | DecimalJsLike | number | string
    stockact?: number
    stockcom?: number
    stocklle?: number
    stockdes?: number
    suniventa: string
    sunicompra: string
    sunirelac?: Decimal | DecimalJsLike | number | string
    sstockact?: number
    sstockcom?: number
    sstocklle?: number
    sstockdes?: number
    precioom?: boolean
    precvta1?: Decimal | DecimalJsLike | number | string
    fecprecv1?: Date | string | null
    precvta2?: Decimal | DecimalJsLike | number | string
    fecprecv2?: Date | string | null
    precvta3: Decimal | DecimalJsLike | number | string
    fecprecv3?: Date | string | null
    precvta4: Decimal | DecimalJsLike | number | string
    fecprecv4?: Date | string | null
    precvta5: Decimal | DecimalJsLike | number | string
    fecprecv5?: Date | string | null
    fecdesp5: Date | string
    fechasp5: Date | string
    ultcosun?: Decimal | DecimalJsLike | number | string
    fultcosun?: Date | string | null
    cosproun?: Decimal | DecimalJsLike | number | string
    fcosproun?: Date | string | null
    cosunan?: Decimal | DecimalJsLike | number | string
    fcosunan?: Date | string | null
    ultcosunom?: Decimal | DecimalJsLike | number | string
    fultcosunom?: Date | string | null
    cosprounom?: Decimal | DecimalJsLike | number | string
    fcosprounom?: Date | string | null
    cosunanom?: Decimal | DecimalJsLike | number | string
    fcosunanom?: Date | string | null
    tipocosto: string
    invfisico?: boolean
    diasrepo?: number
    tipoart: string
    anulado?: boolean
    tipoimp: string
    compuesto?: number
    peso?: Decimal | DecimalJsLike | number | string
    volumen?: Decimal | DecimalJsLike | number | string
    medalto?: number
    medancho?: number
    medlargo?: number
  }

  export type mtprofitartUpdateManyMutationInput = {
    codart?: StringFieldUpdateOperationsInput | string
    artdes?: StringFieldUpdateOperationsInput | string
    fecrec?: DateTimeFieldUpdateOperationsInput | Date | string
    mseriales?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mlote?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mgarantia?: NullableBoolFieldUpdateOperationsInput | boolean | null
    codlin?: StringFieldUpdateOperationsInput | string
    codcat?: StringFieldUpdateOperationsInput | string
    codsubl?: StringFieldUpdateOperationsInput | string
    codcolor?: StringFieldUpdateOperationsInput | string
    codbarra?: NullableStringFieldUpdateOperationsInput | string | null
    artref?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: StringFieldUpdateOperationsInput | string
    coment?: NullableStringFieldUpdateOperationsInput | string | null
    univenta?: StringFieldUpdateOperationsInput | string
    unicompra?: StringFieldUpdateOperationsInput | string
    unirelac?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockact?: IntFieldUpdateOperationsInput | number
    stockcom?: IntFieldUpdateOperationsInput | number
    stocklle?: IntFieldUpdateOperationsInput | number
    stockdes?: IntFieldUpdateOperationsInput | number
    suniventa?: StringFieldUpdateOperationsInput | string
    sunicompra?: StringFieldUpdateOperationsInput | string
    sunirelac?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sstockact?: IntFieldUpdateOperationsInput | number
    sstockcom?: IntFieldUpdateOperationsInput | number
    sstocklle?: IntFieldUpdateOperationsInput | number
    sstockdes?: IntFieldUpdateOperationsInput | number
    precioom?: BoolFieldUpdateOperationsInput | boolean
    precvta1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv1?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv2?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv3?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta4?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv4?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv5?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecdesp5?: DateTimeFieldUpdateOperationsInput | Date | string
    fechasp5?: DateTimeFieldUpdateOperationsInput | Date | string
    ultcosun?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fultcosun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosproun?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosproun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosunan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosunan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultcosunom?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fultcosunom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosprounom?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosprounom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosunanom?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosunanom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipocosto?: StringFieldUpdateOperationsInput | string
    invfisico?: BoolFieldUpdateOperationsInput | boolean
    diasrepo?: IntFieldUpdateOperationsInput | number
    tipoart?: StringFieldUpdateOperationsInput | string
    anulado?: BoolFieldUpdateOperationsInput | boolean
    tipoimp?: StringFieldUpdateOperationsInput | string
    compuesto?: IntFieldUpdateOperationsInput | number
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volumen?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    medalto?: IntFieldUpdateOperationsInput | number
    medancho?: IntFieldUpdateOperationsInput | number
    medlargo?: IntFieldUpdateOperationsInput | number
  }

  export type mtprofitartUncheckedUpdateManyInput = {
    codart?: StringFieldUpdateOperationsInput | string
    artdes?: StringFieldUpdateOperationsInput | string
    fecrec?: DateTimeFieldUpdateOperationsInput | Date | string
    mseriales?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mlote?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mgarantia?: NullableBoolFieldUpdateOperationsInput | boolean | null
    codlin?: StringFieldUpdateOperationsInput | string
    codcat?: StringFieldUpdateOperationsInput | string
    codsubl?: StringFieldUpdateOperationsInput | string
    codcolor?: StringFieldUpdateOperationsInput | string
    codbarra?: NullableStringFieldUpdateOperationsInput | string | null
    artref?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: StringFieldUpdateOperationsInput | string
    coment?: NullableStringFieldUpdateOperationsInput | string | null
    univenta?: StringFieldUpdateOperationsInput | string
    unicompra?: StringFieldUpdateOperationsInput | string
    unirelac?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockact?: IntFieldUpdateOperationsInput | number
    stockcom?: IntFieldUpdateOperationsInput | number
    stocklle?: IntFieldUpdateOperationsInput | number
    stockdes?: IntFieldUpdateOperationsInput | number
    suniventa?: StringFieldUpdateOperationsInput | string
    sunicompra?: StringFieldUpdateOperationsInput | string
    sunirelac?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sstockact?: IntFieldUpdateOperationsInput | number
    sstockcom?: IntFieldUpdateOperationsInput | number
    sstocklle?: IntFieldUpdateOperationsInput | number
    sstockdes?: IntFieldUpdateOperationsInput | number
    precioom?: BoolFieldUpdateOperationsInput | boolean
    precvta1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv1?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv2?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv3?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta4?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv4?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    precvta5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecprecv5?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecdesp5?: DateTimeFieldUpdateOperationsInput | Date | string
    fechasp5?: DateTimeFieldUpdateOperationsInput | Date | string
    ultcosun?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fultcosun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosproun?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosproun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosunan?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosunan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultcosunom?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fultcosunom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosprounom?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosprounom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cosunanom?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fcosunanom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipocosto?: StringFieldUpdateOperationsInput | string
    invfisico?: BoolFieldUpdateOperationsInput | boolean
    diasrepo?: IntFieldUpdateOperationsInput | number
    tipoart?: StringFieldUpdateOperationsInput | string
    anulado?: BoolFieldUpdateOperationsInput | boolean
    tipoimp?: StringFieldUpdateOperationsInput | string
    compuesto?: IntFieldUpdateOperationsInput | number
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volumen?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    medalto?: IntFieldUpdateOperationsInput | number
    medancho?: IntFieldUpdateOperationsInput | number
    medlargo?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type cbdevolucionesOrderByRelevanceInput = {
    fields: cbdevolucionesOrderByRelevanceFieldEnum | cbdevolucionesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cbdevolucionesCountOrderByAggregateInput = {
    devonum?: SortOrder
    fecha?: SortOrder
    estatus?: SortOrder
    codcli?: SortOrder
    motivo?: SortOrder
    tipo?: SortOrder
    chofer?: SortOrder
  }

  export type cbdevolucionesAvgOrderByAggregateInput = {
    devonum?: SortOrder
    estatus?: SortOrder
    tipo?: SortOrder
  }

  export type cbdevolucionesMaxOrderByAggregateInput = {
    devonum?: SortOrder
    fecha?: SortOrder
    estatus?: SortOrder
    codcli?: SortOrder
    motivo?: SortOrder
    tipo?: SortOrder
    chofer?: SortOrder
  }

  export type cbdevolucionesMinOrderByAggregateInput = {
    devonum?: SortOrder
    fecha?: SortOrder
    estatus?: SortOrder
    codcli?: SortOrder
    motivo?: SortOrder
    tipo?: SortOrder
    chofer?: SortOrder
  }

  export type cbdevolucionesSumOrderByAggregateInput = {
    devonum?: SortOrder
    estatus?: SortOrder
    tipo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cbplanpagosOrderByRelevanceInput = {
    fields: cbplanpagosOrderByRelevanceFieldEnum | cbplanpagosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cbplanpagosCountOrderByAggregateInput = {
    planpagonumero?: SortOrder
    unidad?: SortOrder
    empresa?: SortOrder
    fechapagoautorizada?: SortOrder
    descripcionplan?: SortOrder
    fechaautorizadopor?: SortOrder
    autorizadopor?: SortOrder
    totalnetobsd?: SortOrder
    totalnetousd?: SortOrder
    totalsaldobsd?: SortOrder
    totalsaldousd?: SortOrder
    totalautorizadobsd?: SortOrder
    totalautorizadousd?: SortOrder
    totalpagadobsd?: SortOrder
    totalpagadousd?: SortOrder
    totalxpagarbsd?: SortOrder
    totalxpagarusd?: SortOrder
    generadotxt?: SortOrder
    conciliadopago?: SortOrder
    owneruser?: SortOrder
  }

  export type cbplanpagosAvgOrderByAggregateInput = {
    planpagonumero?: SortOrder
    totalnetobsd?: SortOrder
    totalnetousd?: SortOrder
    totalsaldobsd?: SortOrder
    totalsaldousd?: SortOrder
    totalautorizadobsd?: SortOrder
    totalautorizadousd?: SortOrder
    totalpagadobsd?: SortOrder
    totalpagadousd?: SortOrder
    totalxpagarbsd?: SortOrder
    totalxpagarusd?: SortOrder
    owneruser?: SortOrder
  }

  export type cbplanpagosMaxOrderByAggregateInput = {
    planpagonumero?: SortOrder
    unidad?: SortOrder
    empresa?: SortOrder
    fechapagoautorizada?: SortOrder
    descripcionplan?: SortOrder
    fechaautorizadopor?: SortOrder
    autorizadopor?: SortOrder
    totalnetobsd?: SortOrder
    totalnetousd?: SortOrder
    totalsaldobsd?: SortOrder
    totalsaldousd?: SortOrder
    totalautorizadobsd?: SortOrder
    totalautorizadousd?: SortOrder
    totalpagadobsd?: SortOrder
    totalpagadousd?: SortOrder
    totalxpagarbsd?: SortOrder
    totalxpagarusd?: SortOrder
    generadotxt?: SortOrder
    conciliadopago?: SortOrder
    owneruser?: SortOrder
  }

  export type cbplanpagosMinOrderByAggregateInput = {
    planpagonumero?: SortOrder
    unidad?: SortOrder
    empresa?: SortOrder
    fechapagoautorizada?: SortOrder
    descripcionplan?: SortOrder
    fechaautorizadopor?: SortOrder
    autorizadopor?: SortOrder
    totalnetobsd?: SortOrder
    totalnetousd?: SortOrder
    totalsaldobsd?: SortOrder
    totalsaldousd?: SortOrder
    totalautorizadobsd?: SortOrder
    totalautorizadousd?: SortOrder
    totalpagadobsd?: SortOrder
    totalpagadousd?: SortOrder
    totalxpagarbsd?: SortOrder
    totalxpagarusd?: SortOrder
    generadotxt?: SortOrder
    conciliadopago?: SortOrder
    owneruser?: SortOrder
  }

  export type cbplanpagosSumOrderByAggregateInput = {
    planpagonumero?: SortOrder
    totalnetobsd?: SortOrder
    totalnetousd?: SortOrder
    totalsaldobsd?: SortOrder
    totalsaldousd?: SortOrder
    totalautorizadobsd?: SortOrder
    totalautorizadousd?: SortOrder
    totalpagadobsd?: SortOrder
    totalpagadousd?: SortOrder
    totalxpagarbsd?: SortOrder
    totalxpagarusd?: SortOrder
    owneruser?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type cbsolicimatOrderByRelevanceInput = {
    fields: cbsolicimatOrderByRelevanceFieldEnum | cbsolicimatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cbsolicimatCountOrderByAggregateInput = {
    solicitudnumero?: SortOrder
    empresa?: SortOrder
    codigoobra?: SortOrder
    descripcionobra?: SortOrder
    numerocontrol?: SortOrder
    solicitanteuser?: SortOrder
    solicitantecodigo?: SortOrder
    fechasolicitud?: SortOrder
    fechautilizacion?: SortOrder
    observacion?: SortOrder
    actividad?: SortOrder
    direccionentrega?: SortOrder
    fecharevisado?: SortOrder
    revisadopor?: SortOrder
    registradopor?: SortOrder
    revisado?: SortOrder
    procesado?: SortOrder
    anulado?: SortOrder
  }

  export type cbsolicimatAvgOrderByAggregateInput = {
    solicitudnumero?: SortOrder
    numerocontrol?: SortOrder
  }

  export type cbsolicimatMaxOrderByAggregateInput = {
    solicitudnumero?: SortOrder
    empresa?: SortOrder
    codigoobra?: SortOrder
    descripcionobra?: SortOrder
    numerocontrol?: SortOrder
    solicitanteuser?: SortOrder
    solicitantecodigo?: SortOrder
    fechasolicitud?: SortOrder
    fechautilizacion?: SortOrder
    observacion?: SortOrder
    actividad?: SortOrder
    direccionentrega?: SortOrder
    fecharevisado?: SortOrder
    revisadopor?: SortOrder
    registradopor?: SortOrder
    revisado?: SortOrder
    procesado?: SortOrder
    anulado?: SortOrder
  }

  export type cbsolicimatMinOrderByAggregateInput = {
    solicitudnumero?: SortOrder
    empresa?: SortOrder
    codigoobra?: SortOrder
    descripcionobra?: SortOrder
    numerocontrol?: SortOrder
    solicitanteuser?: SortOrder
    solicitantecodigo?: SortOrder
    fechasolicitud?: SortOrder
    fechautilizacion?: SortOrder
    observacion?: SortOrder
    actividad?: SortOrder
    direccionentrega?: SortOrder
    fecharevisado?: SortOrder
    revisadopor?: SortOrder
    registradopor?: SortOrder
    revisado?: SortOrder
    procesado?: SortOrder
    anulado?: SortOrder
  }

  export type cbsolicimatSumOrderByAggregateInput = {
    solicitudnumero?: SortOrder
    numerocontrol?: SortOrder
  }

  export type clbancoprovOrderByRelevanceInput = {
    fields: clbancoprovOrderByRelevanceFieldEnum | clbancoprovOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clbancoprovCountOrderByAggregateInput = {
    numerocuenta?: SortOrder
    beneficiario?: SortOrder
    titularcuenta?: SortOrder
    cuentabanco?: SortOrder
    banco?: SortOrder
    codigobanco?: SortOrder
    codigoswift?: SortOrder
    tipocuenta?: SortOrder
    rifproveedor?: SortOrder
  }

  export type clbancoprovAvgOrderByAggregateInput = {
    numerocuenta?: SortOrder
  }

  export type clbancoprovMaxOrderByAggregateInput = {
    numerocuenta?: SortOrder
    beneficiario?: SortOrder
    titularcuenta?: SortOrder
    cuentabanco?: SortOrder
    banco?: SortOrder
    codigobanco?: SortOrder
    codigoswift?: SortOrder
    tipocuenta?: SortOrder
    rifproveedor?: SortOrder
  }

  export type clbancoprovMinOrderByAggregateInput = {
    numerocuenta?: SortOrder
    beneficiario?: SortOrder
    titularcuenta?: SortOrder
    cuentabanco?: SortOrder
    banco?: SortOrder
    codigobanco?: SortOrder
    codigoswift?: SortOrder
    tipocuenta?: SortOrder
    rifproveedor?: SortOrder
  }

  export type clbancoprovSumOrderByAggregateInput = {
    numerocuenta?: SortOrder
  }

  export type clbancoswiftOrderByRelevanceInput = {
    fields: clbancoswiftOrderByRelevanceFieldEnum | clbancoswiftOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clbancoswiftCountOrderByAggregateInput = {
    codigobanco?: SortOrder
    codigoswift?: SortOrder
    nombrecorto?: SortOrder
    tipocuenta?: SortOrder
  }

  export type clbancoswiftMaxOrderByAggregateInput = {
    codigobanco?: SortOrder
    codigoswift?: SortOrder
    nombrecorto?: SortOrder
    tipocuenta?: SortOrder
  }

  export type clbancoswiftMinOrderByAggregateInput = {
    codigobanco?: SortOrder
    codigoswift?: SortOrder
    nombrecorto?: SortOrder
    tipocuenta?: SortOrder
  }

  export type clcategoriaOrderByRelevanceInput = {
    fields: clcategoriaOrderByRelevanceFieldEnum | clcategoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clcategoriaCountOrderByAggregateInput = {
    codcat?: SortOrder
    catdes?: SortOrder
  }

  export type clcategoriaMaxOrderByAggregateInput = {
    codcat?: SortOrder
    catdes?: SortOrder
  }

  export type clcategoriaMinOrderByAggregateInput = {
    codcat?: SortOrder
    catdes?: SortOrder
  }

  export type cltransporteOrderByRelevanceInput = {
    fields: cltransporteOrderByRelevanceFieldEnum | cltransporteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cltransporteCountOrderByAggregateInput = {
    codtran?: SortOrder
    trandes?: SortOrder
    chofer?: SortOrder
  }

  export type cltransporteMaxOrderByAggregateInput = {
    codtran?: SortOrder
    trandes?: SortOrder
    chofer?: SortOrder
  }

  export type cltransporteMinOrderByAggregateInput = {
    codtran?: SortOrder
    trandes?: SortOrder
    chofer?: SortOrder
  }

  export type clzonasOrderByRelevanceInput = {
    fields: clzonasOrderByRelevanceFieldEnum | clzonasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clzonasCountOrderByAggregateInput = {
    codzon?: SortOrder
    zondes?: SortOrder
  }

  export type clzonasMaxOrderByAggregateInput = {
    codzon?: SortOrder
    zondes?: SortOrder
  }

  export type clzonasMinOrderByAggregateInput = {
    codzon?: SortOrder
    zondes?: SortOrder
  }

  export type dtdevolucionOrderByRelevanceInput = {
    fields: dtdevolucionOrderByRelevanceFieldEnum | dtdevolucionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type dtdevolucionCountOrderByAggregateInput = {
    devnum?: SortOrder
    estatus?: SortOrder
    comentario?: SortOrder
    descrip?: SortOrder
    saldo?: SortOrder
    fecemis?: SortOrder
    fecvenc?: SortOrder
    codcli?: SortOrder
    codven?: SortOrder
    codtran?: SortOrder
  }

  export type dtdevolucionAvgOrderByAggregateInput = {
    devnum?: SortOrder
    saldo?: SortOrder
  }

  export type dtdevolucionMaxOrderByAggregateInput = {
    devnum?: SortOrder
    estatus?: SortOrder
    comentario?: SortOrder
    descrip?: SortOrder
    saldo?: SortOrder
    fecemis?: SortOrder
    fecvenc?: SortOrder
    codcli?: SortOrder
    codven?: SortOrder
    codtran?: SortOrder
  }

  export type dtdevolucionMinOrderByAggregateInput = {
    devnum?: SortOrder
    estatus?: SortOrder
    comentario?: SortOrder
    descrip?: SortOrder
    saldo?: SortOrder
    fecemis?: SortOrder
    fecvenc?: SortOrder
    codcli?: SortOrder
    codven?: SortOrder
    codtran?: SortOrder
  }

  export type dtdevolucionSumOrderByAggregateInput = {
    devnum?: SortOrder
    saldo?: SortOrder
  }

  export type dtdevolucionesOrderByRelevanceInput = {
    fields: dtdevolucionesOrderByRelevanceFieldEnum | dtdevolucionesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type dtdevolucionesItemnumDevonumCompoundUniqueInput = {
    itemnum: number
    devonum: number
  }

  export type dtdevolucionesCountOrderByAggregateInput = {
    itemnum?: SortOrder
    devonum?: SortOrder
    codart?: SortOrder
    serial?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
  }

  export type dtdevolucionesAvgOrderByAggregateInput = {
    itemnum?: SortOrder
    devonum?: SortOrder
    cantidad?: SortOrder
  }

  export type dtdevolucionesMaxOrderByAggregateInput = {
    itemnum?: SortOrder
    devonum?: SortOrder
    codart?: SortOrder
    serial?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
  }

  export type dtdevolucionesMinOrderByAggregateInput = {
    itemnum?: SortOrder
    devonum?: SortOrder
    codart?: SortOrder
    serial?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
  }

  export type dtdevolucionesSumOrderByAggregateInput = {
    itemnum?: SortOrder
    devonum?: SortOrder
    cantidad?: SortOrder
  }

  export type hsplanpagosOrderByRelevanceInput = {
    fields: hsplanpagosOrderByRelevanceFieldEnum | hsplanpagosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type hsplanpagosCountOrderByAggregateInput = {
    unidad?: SortOrder
    empresa?: SortOrder
    tipodocumento?: SortOrder
    numerodocumento?: SortOrder
    codigobeneficiario?: SortOrder
    beneficiario?: SortOrder
    cuentabanco?: SortOrder
    banco?: SortOrder
    rifproveedor?: SortOrder
    tipoproveedor?: SortOrder
    monedaproveedor?: SortOrder
    autorizadopagar?: SortOrder
    fechaemision?: SortOrder
    fechavencimiento?: SortOrder
    fecharegistro?: SortOrder
    registradopor?: SortOrder
    numerofactura?: SortOrder
    observacion?: SortOrder
    tasacambio?: SortOrder
    moneda?: SortOrder
    montoneto?: SortOrder
    montosaldo?: SortOrder
    clasegasto?: SortOrder
    owneruser?: SortOrder
  }

  export type hsplanpagosAvgOrderByAggregateInput = {
    numerodocumento?: SortOrder
    numerofactura?: SortOrder
    tasacambio?: SortOrder
    montoneto?: SortOrder
    montosaldo?: SortOrder
    owneruser?: SortOrder
  }

  export type hsplanpagosMaxOrderByAggregateInput = {
    unidad?: SortOrder
    empresa?: SortOrder
    tipodocumento?: SortOrder
    numerodocumento?: SortOrder
    codigobeneficiario?: SortOrder
    beneficiario?: SortOrder
    cuentabanco?: SortOrder
    banco?: SortOrder
    rifproveedor?: SortOrder
    tipoproveedor?: SortOrder
    monedaproveedor?: SortOrder
    autorizadopagar?: SortOrder
    fechaemision?: SortOrder
    fechavencimiento?: SortOrder
    fecharegistro?: SortOrder
    registradopor?: SortOrder
    numerofactura?: SortOrder
    observacion?: SortOrder
    tasacambio?: SortOrder
    moneda?: SortOrder
    montoneto?: SortOrder
    montosaldo?: SortOrder
    clasegasto?: SortOrder
    owneruser?: SortOrder
  }

  export type hsplanpagosMinOrderByAggregateInput = {
    unidad?: SortOrder
    empresa?: SortOrder
    tipodocumento?: SortOrder
    numerodocumento?: SortOrder
    codigobeneficiario?: SortOrder
    beneficiario?: SortOrder
    cuentabanco?: SortOrder
    banco?: SortOrder
    rifproveedor?: SortOrder
    tipoproveedor?: SortOrder
    monedaproveedor?: SortOrder
    autorizadopagar?: SortOrder
    fechaemision?: SortOrder
    fechavencimiento?: SortOrder
    fecharegistro?: SortOrder
    registradopor?: SortOrder
    numerofactura?: SortOrder
    observacion?: SortOrder
    tasacambio?: SortOrder
    moneda?: SortOrder
    montoneto?: SortOrder
    montosaldo?: SortOrder
    clasegasto?: SortOrder
    owneruser?: SortOrder
  }

  export type hsplanpagosSumOrderByAggregateInput = {
    numerodocumento?: SortOrder
    numerofactura?: SortOrder
    tasacambio?: SortOrder
    montoneto?: SortOrder
    montosaldo?: SortOrder
    owneruser?: SortOrder
  }

  export type metasOrderByRelevanceInput = {
    fields: metasOrderByRelevanceFieldEnum | metasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type metasAnioMesCodvenCodartCompoundUniqueInput = {
    anio: string
    mes: string
    codven: string
    codart: string
  }

  export type metasCountOrderByAggregateInput = {
    anio?: SortOrder
    mes?: SortOrder
    codven?: SortOrder
    codart?: SortOrder
    asignado?: SortOrder
    utilizado?: SortOrder
  }

  export type metasAvgOrderByAggregateInput = {
    asignado?: SortOrder
    utilizado?: SortOrder
  }

  export type metasMaxOrderByAggregateInput = {
    anio?: SortOrder
    mes?: SortOrder
    codven?: SortOrder
    codart?: SortOrder
    asignado?: SortOrder
    utilizado?: SortOrder
  }

  export type metasMinOrderByAggregateInput = {
    anio?: SortOrder
    mes?: SortOrder
    codven?: SortOrder
    codart?: SortOrder
    asignado?: SortOrder
    utilizado?: SortOrder
  }

  export type metasSumOrderByAggregateInput = {
    asignado?: SortOrder
    utilizado?: SortOrder
  }

  export type mtclientesOrderByRelevanceInput = {
    fields: mtclientesOrderByRelevanceFieldEnum | mtclientesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mtclientesCountOrderByAggregateInput = {
    codcli?: SortOrder
    clides?: SortOrder
    dirfiscal?: SortOrder
    telefonos?: SortOrder
    comentario?: SortOrder
    contacto?: SortOrder
    fecreg?: SortOrder
    fecultvta?: SortOrder
    netoultvta?: SortOrder
    montocred?: SortOrder
    diascred?: SortOrder
    descppago?: SortOrder
    codzon?: SortOrder
    codseg?: SortOrder
    codven?: SortOrder
    descglob?: SortOrder
    direntrega?: SortOrder
    numrif?: SortOrder
    tipocli?: SortOrder
    tipocon?: SortOrder
    email?: SortOrder
    ciudad?: SortOrder
    activo?: SortOrder
    autorizado?: SortOrder
    credito?: SortOrder
    saldo?: SortOrder
  }

  export type mtclientesAvgOrderByAggregateInput = {
    netoultvta?: SortOrder
    montocred?: SortOrder
    diascred?: SortOrder
    descppago?: SortOrder
    descglob?: SortOrder
    credito?: SortOrder
    saldo?: SortOrder
  }

  export type mtclientesMaxOrderByAggregateInput = {
    codcli?: SortOrder
    clides?: SortOrder
    dirfiscal?: SortOrder
    telefonos?: SortOrder
    comentario?: SortOrder
    contacto?: SortOrder
    fecreg?: SortOrder
    fecultvta?: SortOrder
    netoultvta?: SortOrder
    montocred?: SortOrder
    diascred?: SortOrder
    descppago?: SortOrder
    codzon?: SortOrder
    codseg?: SortOrder
    codven?: SortOrder
    descglob?: SortOrder
    direntrega?: SortOrder
    numrif?: SortOrder
    tipocli?: SortOrder
    tipocon?: SortOrder
    email?: SortOrder
    ciudad?: SortOrder
    activo?: SortOrder
    autorizado?: SortOrder
    credito?: SortOrder
    saldo?: SortOrder
  }

  export type mtclientesMinOrderByAggregateInput = {
    codcli?: SortOrder
    clides?: SortOrder
    dirfiscal?: SortOrder
    telefonos?: SortOrder
    comentario?: SortOrder
    contacto?: SortOrder
    fecreg?: SortOrder
    fecultvta?: SortOrder
    netoultvta?: SortOrder
    montocred?: SortOrder
    diascred?: SortOrder
    descppago?: SortOrder
    codzon?: SortOrder
    codseg?: SortOrder
    codven?: SortOrder
    descglob?: SortOrder
    direntrega?: SortOrder
    numrif?: SortOrder
    tipocli?: SortOrder
    tipocon?: SortOrder
    email?: SortOrder
    ciudad?: SortOrder
    activo?: SortOrder
    autorizado?: SortOrder
    credito?: SortOrder
    saldo?: SortOrder
  }

  export type mtclientesSumOrderByAggregateInput = {
    netoultvta?: SortOrder
    montocred?: SortOrder
    diascred?: SortOrder
    descppago?: SortOrder
    descglob?: SortOrder
    credito?: SortOrder
    saldo?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type mtprofitartOrderByRelevanceInput = {
    fields: mtprofitartOrderByRelevanceFieldEnum | mtprofitartOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mtprofitartCountOrderByAggregateInput = {
    codart?: SortOrder
    artdes?: SortOrder
    fecrec?: SortOrder
    mseriales?: SortOrder
    mlote?: SortOrder
    mgarantia?: SortOrder
    codlin?: SortOrder
    codcat?: SortOrder
    codsubl?: SortOrder
    codcolor?: SortOrder
    codbarra?: SortOrder
    artref?: SortOrder
    modelo?: SortOrder
    coment?: SortOrder
    univenta?: SortOrder
    unicompra?: SortOrder
    unirelac?: SortOrder
    stockact?: SortOrder
    stockcom?: SortOrder
    stocklle?: SortOrder
    stockdes?: SortOrder
    suniventa?: SortOrder
    sunicompra?: SortOrder
    sunirelac?: SortOrder
    sstockact?: SortOrder
    sstockcom?: SortOrder
    sstocklle?: SortOrder
    sstockdes?: SortOrder
    precioom?: SortOrder
    precvta1?: SortOrder
    fecprecv1?: SortOrder
    precvta2?: SortOrder
    fecprecv2?: SortOrder
    precvta3?: SortOrder
    fecprecv3?: SortOrder
    precvta4?: SortOrder
    fecprecv4?: SortOrder
    precvta5?: SortOrder
    fecprecv5?: SortOrder
    fecdesp5?: SortOrder
    fechasp5?: SortOrder
    ultcosun?: SortOrder
    fultcosun?: SortOrder
    cosproun?: SortOrder
    fcosproun?: SortOrder
    cosunan?: SortOrder
    fcosunan?: SortOrder
    ultcosunom?: SortOrder
    fultcosunom?: SortOrder
    cosprounom?: SortOrder
    fcosprounom?: SortOrder
    cosunanom?: SortOrder
    fcosunanom?: SortOrder
    tipocosto?: SortOrder
    invfisico?: SortOrder
    diasrepo?: SortOrder
    tipoart?: SortOrder
    anulado?: SortOrder
    tipoimp?: SortOrder
    compuesto?: SortOrder
    peso?: SortOrder
    volumen?: SortOrder
    medalto?: SortOrder
    medancho?: SortOrder
    medlargo?: SortOrder
  }

  export type mtprofitartAvgOrderByAggregateInput = {
    unirelac?: SortOrder
    stockact?: SortOrder
    stockcom?: SortOrder
    stocklle?: SortOrder
    stockdes?: SortOrder
    sunirelac?: SortOrder
    sstockact?: SortOrder
    sstockcom?: SortOrder
    sstocklle?: SortOrder
    sstockdes?: SortOrder
    precvta1?: SortOrder
    precvta2?: SortOrder
    precvta3?: SortOrder
    precvta4?: SortOrder
    precvta5?: SortOrder
    ultcosun?: SortOrder
    cosproun?: SortOrder
    cosunan?: SortOrder
    ultcosunom?: SortOrder
    cosprounom?: SortOrder
    cosunanom?: SortOrder
    diasrepo?: SortOrder
    compuesto?: SortOrder
    peso?: SortOrder
    volumen?: SortOrder
    medalto?: SortOrder
    medancho?: SortOrder
    medlargo?: SortOrder
  }

  export type mtprofitartMaxOrderByAggregateInput = {
    codart?: SortOrder
    artdes?: SortOrder
    fecrec?: SortOrder
    mseriales?: SortOrder
    mlote?: SortOrder
    mgarantia?: SortOrder
    codlin?: SortOrder
    codcat?: SortOrder
    codsubl?: SortOrder
    codcolor?: SortOrder
    codbarra?: SortOrder
    artref?: SortOrder
    modelo?: SortOrder
    coment?: SortOrder
    univenta?: SortOrder
    unicompra?: SortOrder
    unirelac?: SortOrder
    stockact?: SortOrder
    stockcom?: SortOrder
    stocklle?: SortOrder
    stockdes?: SortOrder
    suniventa?: SortOrder
    sunicompra?: SortOrder
    sunirelac?: SortOrder
    sstockact?: SortOrder
    sstockcom?: SortOrder
    sstocklle?: SortOrder
    sstockdes?: SortOrder
    precioom?: SortOrder
    precvta1?: SortOrder
    fecprecv1?: SortOrder
    precvta2?: SortOrder
    fecprecv2?: SortOrder
    precvta3?: SortOrder
    fecprecv3?: SortOrder
    precvta4?: SortOrder
    fecprecv4?: SortOrder
    precvta5?: SortOrder
    fecprecv5?: SortOrder
    fecdesp5?: SortOrder
    fechasp5?: SortOrder
    ultcosun?: SortOrder
    fultcosun?: SortOrder
    cosproun?: SortOrder
    fcosproun?: SortOrder
    cosunan?: SortOrder
    fcosunan?: SortOrder
    ultcosunom?: SortOrder
    fultcosunom?: SortOrder
    cosprounom?: SortOrder
    fcosprounom?: SortOrder
    cosunanom?: SortOrder
    fcosunanom?: SortOrder
    tipocosto?: SortOrder
    invfisico?: SortOrder
    diasrepo?: SortOrder
    tipoart?: SortOrder
    anulado?: SortOrder
    tipoimp?: SortOrder
    compuesto?: SortOrder
    peso?: SortOrder
    volumen?: SortOrder
    medalto?: SortOrder
    medancho?: SortOrder
    medlargo?: SortOrder
  }

  export type mtprofitartMinOrderByAggregateInput = {
    codart?: SortOrder
    artdes?: SortOrder
    fecrec?: SortOrder
    mseriales?: SortOrder
    mlote?: SortOrder
    mgarantia?: SortOrder
    codlin?: SortOrder
    codcat?: SortOrder
    codsubl?: SortOrder
    codcolor?: SortOrder
    codbarra?: SortOrder
    artref?: SortOrder
    modelo?: SortOrder
    coment?: SortOrder
    univenta?: SortOrder
    unicompra?: SortOrder
    unirelac?: SortOrder
    stockact?: SortOrder
    stockcom?: SortOrder
    stocklle?: SortOrder
    stockdes?: SortOrder
    suniventa?: SortOrder
    sunicompra?: SortOrder
    sunirelac?: SortOrder
    sstockact?: SortOrder
    sstockcom?: SortOrder
    sstocklle?: SortOrder
    sstockdes?: SortOrder
    precioom?: SortOrder
    precvta1?: SortOrder
    fecprecv1?: SortOrder
    precvta2?: SortOrder
    fecprecv2?: SortOrder
    precvta3?: SortOrder
    fecprecv3?: SortOrder
    precvta4?: SortOrder
    fecprecv4?: SortOrder
    precvta5?: SortOrder
    fecprecv5?: SortOrder
    fecdesp5?: SortOrder
    fechasp5?: SortOrder
    ultcosun?: SortOrder
    fultcosun?: SortOrder
    cosproun?: SortOrder
    fcosproun?: SortOrder
    cosunan?: SortOrder
    fcosunan?: SortOrder
    ultcosunom?: SortOrder
    fultcosunom?: SortOrder
    cosprounom?: SortOrder
    fcosprounom?: SortOrder
    cosunanom?: SortOrder
    fcosunanom?: SortOrder
    tipocosto?: SortOrder
    invfisico?: SortOrder
    diasrepo?: SortOrder
    tipoart?: SortOrder
    anulado?: SortOrder
    tipoimp?: SortOrder
    compuesto?: SortOrder
    peso?: SortOrder
    volumen?: SortOrder
    medalto?: SortOrder
    medancho?: SortOrder
    medlargo?: SortOrder
  }

  export type mtprofitartSumOrderByAggregateInput = {
    unirelac?: SortOrder
    stockact?: SortOrder
    stockcom?: SortOrder
    stocklle?: SortOrder
    stockdes?: SortOrder
    sunirelac?: SortOrder
    sstockact?: SortOrder
    sstockcom?: SortOrder
    sstocklle?: SortOrder
    sstockdes?: SortOrder
    precvta1?: SortOrder
    precvta2?: SortOrder
    precvta3?: SortOrder
    precvta4?: SortOrder
    precvta5?: SortOrder
    ultcosun?: SortOrder
    cosproun?: SortOrder
    cosunan?: SortOrder
    ultcosunom?: SortOrder
    cosprounom?: SortOrder
    cosunanom?: SortOrder
    diasrepo?: SortOrder
    compuesto?: SortOrder
    peso?: SortOrder
    volumen?: SortOrder
    medalto?: SortOrder
    medancho?: SortOrder
    medlargo?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}