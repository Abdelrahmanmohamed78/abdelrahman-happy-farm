import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { InitialState } from "../types/types";

const initialState: InitialState = {
  products: [
    {
      id: 1,
      productName: "Organic Fresh Milk",
      productPrice: 15.12,
      productWeight: "gal",
      category: "milk",
      descriptionText:
        "Lorem ipsum dolor sit amet, nulla probatus oportere pro ut, at iisque ocurreret qui, qui everti nusquam eu. Mundi appetere et sit, iracundia interesset consequuntur nec an. Sumo nibh repudiare at has, no pri eruditi percipit.",
      descriptionImage: "/public/farm-product-description-opt.jpg",
      images: [
        "/farm-milk-1.jpg",
        "/farm-milk-2.jpg",
        "/farm-milk-3.jpg",
        "/farm-milk-4.jpg",
      ],
      productAmount: 1,
      review: {
        fiveStars: 2,
        fourStars: 0,
        threeStars: 0,
        twoStars: 0,
        oneStars: 0,
      },
      isHot: false,
      isNew: false,
    },
    {
      id: 2,
      productName: "Cheese With Nuts Inside",
      productPrice: 17.9,
      productWeight: "lb",
      category: "cheese",
      descriptionText:
        "Lorem ipsum dolor sit amet, nulla probatus oportere pro ut, at iisque ocurreret qui, qui everti nusquam eu. Mundi appetere et sit, iracundia interesset consequuntur nec an. Sumo nibh repudiare at has, no pri eruditi percipit.",
      descriptionImage: "/public/farm-product-description-opt.jpg",
      images: [
        "/farm-cheese-2-1.jpg",
        "/farm-cheese-2-2.jpg",
        "/farm-cheese-2-3.jpg",
      ],
      productAmount: 1,
      review: {
        fiveStars: 1,
        fourStars: 0,
        threeStars: 0,
        twoStars: 0,
        oneStars: 0,
      },
      isHot: false,
      isNew: false,
    },
    {
      id: 3,
      productName: "Sour Cream",
      productPrice: 48.8,
      productWeight: "lb",
      category: "sour cream",
      descriptionText:
        "Lorem ipsum dolor sit amet, nulla probatus oportere pro ut, at iisque ocurreret qui, qui everti nusquam eu. Mundi appetere et sit, iracundia interesset consequuntur nec an. Sumo nibh repudiare at has, no pri eruditi percipit.",
      descriptionImage: "/public/farm-product-description-opt.jpg",
      images: [
        "/farm-sour-cream-1.jpg",
        "/farm-sour-cream-2.jpg",
        "/farm-sour-cream-3.jpg",
      ],
      productAmount: 1,
      review: {
        fiveStars: 1,
        fourStars: 0,
        threeStars: 0,
        twoStars: 0,
        oneStars: 0,
      },
      isHot: true,
      isNew: false,
    },
    {
      id: 4,
      productName: "Salted Butter",
      productPrice: 6.4,
      productWeight: "lb",
      category: "butter",
      descriptionText:
        "Lorem ipsum dolor sit amet, nulla probatus oportere pro ut, at iisque ocurreret qui, qui everti nusquam eu. Mundi appetere et sit, iracundia interesset consequuntur nec an. Sumo nibh repudiare at has, no pri eruditi percipit.",
      descriptionImage: "/public/farm-product-description-opt.jpg",
      images: [
        "/farm-butter-salted.jpg",
        "/farm-butter-unsalted-salted-2.jpg",
        "/farm-butter-unsalted-salted-3.jpg",
        "/farm-butter-unsalted-salted-4.jpg",
      ],
      productAmount: 1,
      review: {
        fiveStars: 1,
        fourStars: 0,
        threeStars: 0,
        twoStars: 0,
        oneStars: 0,
      },
      isHot: false,
      isNew: false,
    },
    {
      id: 5,
      productName: "Cheese With Cumin",
      productPrice: 8.45,
      productWeight: "lb",
      category: "cheese",
      descriptionText:
        "Lorem ipsum dolor sit amet, nulla probatus oportere pro ut, at iisque ocurreret qui, qui everti nusquam eu. Mundi appetere et sit, iracundia interesset consequuntur nec an. Sumo nibh repudiare at has, no pri eruditi percipit.",
      descriptionImage: "/public/farm-product-description-opt.jpg",
      images: [
        "/farm-cheese-3-1.jpg",
        "/farm-cheese-3-2.jpg",
        "/farm-cheese-3-3.jpg",
      ],
      productAmount: 1,
      review: {
        fiveStars: 1,
        fourStars: 0,
        threeStars: 0,
        twoStars: 0,
        oneStars: 0,
      },
      isHot: false,
      isNew: false,
    },
    {
      id: 6,
      productName: "Yogurt Banana",
      productPrice: 24.0,
      productWeight: "lb",
      category: "yogurt",
      descriptionText:
        "Lorem ipsum dolor sit amet, nulla probatus oportere pro ut, at iisque ocurreret qui, qui everti nusquam eu. Mundi appetere et sit, iracundia interesset consequuntur nec an. Sumo nibh repudiare at has, no pri eruditi percipit.",
      descriptionImage: "/public/farm-product-description-opt.jpg",
      images: [
        "/farm-yogurt-banana-1.jpg",
        "/farm-yogurt-banana-2.jpg",
        "/farm-yogurt-banana-3.jpg",
      ],
      productAmount: 1,
      review: {
        fiveStars: 1,
        fourStars: 0,
        threeStars: 0,
        twoStars: 0,
        oneStars: 0,
      },
      isHot: false,
      isNew: true,
    },
    {
      id: 7,
      productName: "Organic Milk Pasteurized",
      productPrice: 5.12,
      productWeight: "gal",
      category: "milk",
      descriptionText:
        "Lorem ipsum dolor sit amet, nulla probatus oportere pro ut, at iisque ocurreret qui, qui everti nusquam eu. Mundi appetere et sit, iracundia interesset consequuntur nec an. Sumo nibh repudiare at has, no pri eruditi percipit.",
      descriptionImage: "/public/farm-product-description-opt.jpg",
      images: [
        "/farm-milk-pasteurized-1.jpg",
        "/farm-milk-pasteurized-2.jpg",
        "/farm-milk-pasteurized-3.jpg",
        "/farm-milk-pasteurized-4.jpg",
      ],
      productAmount: 1,
      review: {
        fiveStars: 1,
        fourStars: 1,
        threeStars: 1,
        twoStars: 1,
        oneStars: 0,
      },
      isHot: false,
      isNew: false,
    },
  ],
  wishlist: [],
  articles: [
    {
      id: 1,
      title: "Pre-calving supplement offers nutrition boost",
      category: "Forage & Silage",
      date: {
        day: 19,
        month: "september",
        year: 2023,
      },
      author: {
        image: "/farm-marvin-mckinney.png",
        username: "Mr. Mackay",
      },
      bannerImage: "/farm-blog-8.jpg",
      posts: [
        {
          header: "",
          text: "The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I’d say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.",
          image: "/farm-single-post-image-1.jpg",
          reversed: false,
        },
        {
          header: "Feed efficiency comes into focus",
          text: "The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I’d say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.",
          image: "/farm-single-post-image-1.jpg",
          reversed: true,
        },
        {
          header: "More refined results",
          text: `You made all the required mock ups for <span class="font-bold text-second-bg">commissioned layout, got all the approvals,</span> built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client’s needs. Then the question arises: where’s the content? Not there yet? <span class="font-bold">That’s not so bad, there’s dummy copy to the rescue.</span> But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons the folks in the meeting can’t quite tell right now, but they’re unhappy, somehow. A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or her can’t quite put a finger on it is worse.`,
          image: "/farm-single-post-image-4-700x665.jpg",
          reversed: false,
        },
      ],
    },
    {
      id: 2,
      title: "Organic dairy farming calls for even healthier cows",
      category: "Organic",
      date: {
        day: 12,
        month: "september",
        year: 2023,
      },
      author: {
        image: "/farm-marvin-mckinney.png",
        username: "Mr. Mackay",
      },
      bannerImage: "/farm-blog-7.jpg",
      posts: [
        {
          header: "",
          text: "Chances are there wasn’t collaboration, communication, and checkpoints, there wasn’t a process agreed upon or specified with the granularity required. It’s content strategy gone awry right from the start. Forswearing the use of Lorem Ipsum wouldn’t have helped, won’t help now. It’s like saying you’re a bad designer, use less bold text, don’t use italics in every other paragraph. True enough, but that’s not all that it takes to get things back on track. A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or her can’t quite put a finger on it is worse.",
          image: "/farm-single-post-image-1.jpg",
          reversed: false,
        },
        {
          header: "Feed efficiency comes into focus",
          text: `You begin with a text, you sculpt information, you chisel away what’s not needed, you come to the point, make things clear, add value, you’re a content person, you like words. <span class="text-second-bg">Design is no afterthought,</span> far from it, but it comes in a deserved second. Anyway, you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers toolbox, as things happen, not always the way you like it, not always in the preferred order. Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy, no less.`,
          image: "/farm-single-post-image-1.jpg",
          reversed: true,
        },
        {
          header: "More refined results",
          text: `You made all the required mock ups for <span class="font-bold text-second-bg">commissioned layout, got all the approvals,</span> built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client’s needs. Then the question arises: where’s the content? Not there yet? <span class="font-bold">That’s not so bad, there’s dummy copy to the rescue.</span> But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons the folks in the meeting can’t quite tell right now, but they’re unhappy, somehow. A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or her can’t quite put a finger on it is worse.`,
          image: "/farm-single-post-image-4-700x665.jpg",
          reversed: false,
        },
      ],
    },
    {
      id: 3,
      title: "Healthy, resilient cows for organic dairy farming",
      category: "Food Safety",
      date: {
        day: 9,
        month: "september",
        year: 2023,
      },
      author: {
        image: "/farm-marvin-mckinney.png",
        username: "Mr. Mackay",
      },
      bannerImage: "/farm-blog-6.jpg",
      posts: [
        {
          header: "",
          text: "There’s lot of hate out there for a text that amounts to little more than garbled words in an old language. The villagers are out there with a vengeance to get that Frankenstein, wielding torches and pitchforks, wanting to tar and feather it at the least, running it out of town in shame. One of the villagers, Kristina Halvorson from Adaptive Path, holds steadfastly to the notion that design can’t be tested without real content. I’ve heard the argument that “lorem ipsum” is effective in wireframing or design because it helps people focus on the actual layout, or color scheme, or whatever.",
          image: "/farm-single-post-image-1.jpg",
          reversed: false,
        },
        {
          header: "Feed efficiency comes into focus",
          text: `You begin with a text, you sculpt information, you chisel away what’s not needed, you come to the point, make things clear, add value, you’re a content person, you like words. <span class="text-second-bg">Design is no afterthought</span>, far from it, but it comes in a deserved second. Anyway, you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers toolbox, as things happen, not always the way you like it, not always in the preferred order. <span class="italic">Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy, no less.</span>`,
          image: "/farm-single-post-image-1.jpg",
          reversed: true,
        },
        {
          header: "More refined results",
          text: `You made all the required mock ups for <span class="font-bold text-second-bg">commissioned layout, got all the approvals,</span> built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client’s needs. Then the question arises: where’s the content? Not there yet? <span class="font-bold">That’s not so bad, there’s dummy copy to the rescue.</span> But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons the folks in the meeting can’t quite tell right now, but they’re unhappy, somehow. A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or her can’t quite put a finger on it is worse.`,
          image: "/farm-single-post-image-4-700x665.jpg",
          reversed: false,
        },
      ],
    },
    {
      id: 4,
      title: "What breeds can I choose for organic dairy farming?",
      category: "Agroecology",
      date: {
        day: 28,
        month: "august",
        year: 2023,
      },
      author: {
        image: "/farm-marvin-mckinney.png",
        username: "Mr. Mackay",
      },
      bannerImage: "/farm-blog-5.jpg",
      posts: [
        {
          header: "",
          text: "If that’s what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader. Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets with the copy decks they supply that are in tune with the design direction they require.",
          image: "/farm-single-post-image-1.jpg",
          reversed: false,
        },
        {
          header: "Feed efficiency comes into focus",
          text: "The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I’d say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.",
          image: "/farm-single-post-image-1.jpg",
          reversed: true,
        },
        {
          header: "More refined results",
          text: `You made all the required mock ups for <span class="font-bold text-second-bg">commissioned layout, got all the approvals,</span> built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client’s needs. Then the question arises: where’s the content? Not there yet? <span class="font-bold">That’s not so bad, there’s dummy copy to the rescue.</span> But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons the folks in the meeting can’t quite tell right now, but they’re unhappy, somehow. A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or her can’t quite put a finger on it is worse.`,
          image: "/farm-single-post-image-4-700x665.jpg",
          reversed: false,
        },
      ],
    },
  ],
  users: [{
    id: 1,
    username: "Admin",
    email: "admin@gmail.com",
    password: "12345678",
    cart: [],
    wishlist: [],
  }],
  selectedProduct: null,
  showOverlay: false,
  selectedProductToEdit: null,
  showProductEditAside: false,
  selectedBlogToEdit: null,
  showBlogEditAside: false,
  showLinksAside: false,
  showDescriptionAside: false,
  showDeliveryAside: false,
  selectedUser: null,
};

export const farmSlice = createSlice({
  name: "farmSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => {
        return product.id !== action.payload;
      });
      toast.success("Product Removed Successfully");
    },
    handleEditAside: (state, action) => {
      state.showProductEditAside = action.payload;
    },
    handleBlogEditAside: (state, action) => {
      state.showBlogEditAside = action.payload;
    },
    handleSelectedProductToEdit: (state, action) => {
      state.selectedProductToEdit = action.payload;
    },
    handleEditedProduct: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.productName = action.payload.productName;
          product.productPrice = action.payload.productPrice;
        }
        return product;
      });
    },
    addBlogs: (state, action) => {
      state.articles.push(action.payload);
    },
    removeBlogs: (state, action) => {
      state.articles = state.articles.filter((blog) => {
        return blog.id !== action.payload;
      });
      toast.success("Blog Removed Successfully");
    },
    handleSelectedBlogToEdit: (state, action) => {
      state.selectedBlogToEdit = action.payload;
    },
    handleEditedBlog: (state, action) => {
      state.articles = state.articles.map((blog) => {
        if (+blog.id === +action.payload.id) {
          blog.title = action.payload.title;
          blog.category = action.payload.category;
          blog.date.day = action.payload.date.day;
          blog.date.month = action.payload.date.month;
          blog.date.year = action.payload.date.year;
        }
        return blog;
      });
      toast.success("Blog Edited Successfully");
    },
    AddToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((el) => {
        return el.id !== action.payload;
      });
    },
    handleShowOverlay: (state, action) => {
      state.showOverlay = action.payload;
    },
    handleSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    handleProductAmount: (state, action) => {
      state.products = state.products.map((el) => {
        if (+el.id === +action.payload.id) {
          el.productAmount = action.payload.amount;
          state.selectedProduct = el;
        }
        return el;
      });
    },
    handleResetProductsAmount: (state) => {
      state.products = state.products.map(product => {
        product.productAmount = 1;
        return product;
      })
    },
    handleShowLinksAside: (state, action) => {
      state.showLinksAside = action.payload;
    },
    handleDescriptionAside: (state, action) => {
      state.showDescriptionAside = action.payload;
    },
    handleDeliveryAside: (state, action) => {
      state.showDeliveryAside = action.payload;
    },
    handleAddUser: (state, action) => {
      state.users.push(action.payload);
    },
    handleRemoveUser: (state, action) => {
      state.users = state.users.filter((user) => {
        return user.id !== action.payload;
      });
      toast.success("User Removed Successfully");
    },
    handleClearCart: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload) {
          user.cart = [];
        }
        return user;
      });
      toast.success("User Cart Cleared Successfully");
    },
    handleClearWishlist: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload) {
          user.wishlist = [];
        }
        return user;
      });
      toast.success("User Wishlist Cleared Successfully");
    },
    handleAddProductToUserWishlist: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          console.log("TRUE");
          user.wishlist.push(action.payload.product);
          state.selectedUser = user;
        }
        return user;
      });
    },
    handleRemoveProductFromUserWishlist: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.wishlist = user.wishlist.filter((product) => {
            return product.id !== action.payload.productID;
          });
          state.selectedUser = user;
        }
        return user;
      });
    },
    handleAddCompleteProductToUser: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.completedOrders?.push(action.payload.completedOrder);
          user.cart = [];
          state.selectedUser = user;
        }
        return user;
      });
    },
    handleClearUserCart: (state, action) => {
      state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.cart = [];
        }
        return user;
      });
    },
    handleSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    handleUserDetails: (state, action) => {
      state.users = state.users.map((user) => {
        if (+user.id === +action.payload.id) {
          user = {
            ...user,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            username: action.payload.username,
            email: action.payload.email,
            password: action.payload.password,
          };
          state.selectedUser = user;
        }
        return user;
      });
    },
    AddToCart: (state, action) => {
      state.users.map((user) => {
        if (+user.id === +action.payload.id) {
          const exist = user.cart.some(
            (el) => +el.id === +action.payload.cartProduct.id,
          );
          if (exist === false) {
            user.cart.push(action.payload.cartProduct);
            state.selectedUser = user;
            toast.success("Product Added To Cart Successfully");
          } else {
            toast.error("Product already Exist In Cart");
          }
        }
      });
    },
    RemoveFromCart: (state, action) => {
      state.users.map((user) => {
        if (+user.id === +action.payload.id) {
          user.cart = user.cart.filter((product) => {
            return +product.id !== +action.payload.productId;
          });
          state.selectedUser = user;
        }
      });
      toast.success("Product Removed Successfully");
    },
    handleProductAmountInCart: (state, action) => {
      state.users = state.users.map((user) => {
        if (+user.id === +action.payload.id) {
          user.cart = user.cart.map((product) => {
            if (+product.id === +action.payload.productId) {
              product.productAmount = action.payload.productAmount;
            }
            return product;
          });
          state.selectedUser = user;
        }
        return user;
      });
    },
  },
});

export const {
  addProduct,
  removeProduct,
  handleEditAside,
  handleEditedProduct,
  handleSelectedProductToEdit,
  addBlogs,
  removeBlogs,
  handleSelectedBlogToEdit,
  handleBlogEditAside,
  handleEditedBlog,
  AddToWishlist,
  removeFromWishlist,
  handleShowOverlay,
  handleSelectedProduct,
  handleProductAmount,
  handleResetProductsAmount,
  handleShowLinksAside,
  handleDescriptionAside,
  handleDeliveryAside,
  handleAddUser,
  handleRemoveUser,
  handleClearCart,
  handleClearWishlist,
  handleAddProductToUserWishlist,
  handleRemoveProductFromUserWishlist,
  handleAddCompleteProductToUser,
  handleClearUserCart,
  handleSelectedUser,
  handleUserDetails,
  AddToCart,
  RemoveFromCart,
  handleProductAmountInCart,
} = farmSlice.actions;
export default farmSlice.reducer;