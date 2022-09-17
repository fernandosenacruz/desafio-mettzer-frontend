const findFavorited = ((arr: any, title: string): any[] | [] => 
  arr.find((f: any) => f.title === title));

export default findFavorited;
