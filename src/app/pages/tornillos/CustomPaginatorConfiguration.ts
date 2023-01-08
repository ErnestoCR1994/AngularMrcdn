import { MatPaginatorIntl } from '@angular/material/paginator';

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Ítems por página:';

  customPaginatorIntl.firstPageLabel = `Primera página`;

  customPaginatorIntl.lastPageLabel = `Última página`;

  customPaginatorIntl.nextPageLabel = 'Siguiente página';
  customPaginatorIntl.previousPageLabel = 'Previa página';


  customPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) =>  {
    if (length === 0 || pageSize === 0) {
      return `0 / ${length}`;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

    var paginatorlabel = `${startIndex + 1} - ${endIndex} de ${length} ítems`
    return paginatorlabel ;
  }



  return customPaginatorIntl;
}
