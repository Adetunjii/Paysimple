export interface INavItem {
  name: string;
  url?: string;
  icon?: string;
  children?: INavItem[];
  isShown?: boolean;
}
