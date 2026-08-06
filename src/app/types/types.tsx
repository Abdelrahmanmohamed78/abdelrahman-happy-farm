export interface ProductProps {
  id: number;
  productName: string;
  productPrice: number;
  productWeight: string;
  category: string;
  descriptionText: string;
  descriptionImage: string;
  images: string[];
  productAmount: number;
  review: {
    fiveStars: number;
    fourStars: number;
    threeStars: number;
    twoStars: number;
    oneStars: number;
  };
  isHot: boolean;
  isNew: boolean;
}

export interface BlogProps {
  id: number;
  title: string;
  category: string;
  date: {
    day: number;
    month: string;
    year: number;
  };
  author: {
    image: string;
    username: string;
  };
  bannerImage: string;
  posts: {
    header: string;
    text: string;
    image: string;
    reversed: boolean;
  }[];
}

export interface InitialState {
  products: ProductProps[],
  wishlist: ProductProps[],
  articles: BlogProps[],
  selectedProduct: ProductProps | null,
  showOverlay: boolean,
  selectedProductToEdit: ProductProps | null,
  showProductEditAside: boolean,
  selectedBlogToEdit: BlogProps | null,
  showBlogEditAside: boolean,
  showLinksAside: boolean,
  showDescriptionAside: boolean,
  showDeliveryAside: boolean,
  users: User[],
  selectedUser: User | null,
}

export interface User {
  id: number,
  email: string,
  password: string,
  username: string,
  cart: ProductProps[],
  wishlist: ProductProps[],
  completedOrders?: CompletedOrdersProps[],
  firstName?: string,
  lastName?: string,
  phone?: string
}

export interface CompletedOrdersProps extends ProductProps {
  completedID: number,
  cart: ProductProps[]
}