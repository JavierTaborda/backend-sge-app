import { PlanPagosBase } from '../interfaces/PlanPasgosBase';

export function mergeDocuments(
  sqlList: PlanPagosBase[],
  mysqlListHs: PlanPagosBase[],
  mysqlListMv: PlanPagosBase[],
): PlanPagosBase[] {
  const map = new Map<string, PlanPagosBase>();

  const makeKey = (item: PlanPagosBase) =>
    `${item.tipodocumento}-${item.numerodocumento}`;

  for (const item of sqlList) {
    map.set(makeKey(item), item);
  }

  for (const item of mysqlListHs) {
    const key = makeKey(item);
    if (!map.has(key)) {
      map.set(key, item);
    }
  }

  for (const item of mysqlListMv) {

    const key = makeKey(item);
    if (map.has(key)) {
      map.set(key, item);
    }
  }
  return Array.from(map.values()).sort(
    (a, b) => +new Date(a.fechavencimiento) - +new Date(b.fechavencimiento),
  );
}
