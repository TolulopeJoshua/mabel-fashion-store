# mabel-fashion-store

Mabel Fashion store is built using ReactJs frontend and firebase backend.

The app store is created with React createContext and the useReducer hook. The reducer holds functions for adding and removing items from cart and for clearing the cart.

The main page is styled with and header which holds the store name and an animated cart button, the store image, a product summary card, and the available products list.

Available products is fetched from firebase realtime database, the products are mapped and each item is rendered with a child component - product-item. Loading page and error page are conditionally rendered based on the 'fetch' state. Each item has an image, title, description, an input for number of item to be added to cart, and a 'add' button displayed in a styled card.

The cart is conditionally displayed in a modal based on a showCart state toggled by the main nav cart button onclick event function. It retrieves the items added to cart from the context store and displays them with its context-item child component. It also has the address input form and the submit order button which triggers the fetch funtion to send order data to the firebase database with a post request after which the store is restored to default state - empty.

The modal and its backdrop are rendered on a div element in the index html with id - 'overlays' with React createPortal funtion.