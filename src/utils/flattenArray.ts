// ----------------------------------------------------------------------

export default function flattenArray({
  list,
  key = 'children',
}: {
  list: any[];
  key?: string;
}): any {
  let children: string | any[] = [];

  const flatten = list?.map((item) => {
    if (item[key] && item[key].length) {
      children = [...children, ...item[key]];
    }
    return item;
  });

  return flatten?.concat(children.length ? flattenArray({ list: children, key }) : children);
}
