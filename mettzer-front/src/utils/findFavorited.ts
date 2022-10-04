const findFavorited = ((arr: any, id: string): any[] | [] => 
  arr.find((f: any) => f.id === id));

export default findFavorited;
