# mabel-fashion-store

Mabel Fashion store is built using ReactJs frontend and firebase backend.

It has a simple layout with a navbar holding the page title and cart button, and a section for available products.
The available products are loaded from the firebase database using React useEffect and the fetch api.

The cart items are displayed in a modal with an onClick event on the cart button. Cart items selected from available products are stored in a custom store with React useContext.
On checkout, items in the cart store are send to a different collection in same firebase database and cart is cleared.
