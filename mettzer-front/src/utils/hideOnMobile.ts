export interface IFavoriteLinks {
  shouldHideOnMobile?: boolean | undefined;
}

const hideOnMobile = (shoulHideOnMobile: IFavoriteLinks) => {
  return shoulHideOnMobile && {display: { xs: 'none', sm: 'block' }
}};

export default hideOnMobile;
