/**
 * Calcula el precio total de los productos en un carrito.
 *
 * @function TotalPrice
 * @param {Array} cartProducts - Un array de objetos que representan los productos en el carrito de compras. Cada objeto debe contener las propiedades:
 *   - {number} price - El precio unitario del producto.
 *   - {number} amount - La cantidad de unidades de ese producto.
 * @returns {number} - El precio total calculado como la suma de (precio unitario * cantidad) para todos los productos en el carrito.
 *
 * @example
 * const cart = [
 *   { price: 109.95, amount: 2 },
 *   { price: 55.99, amount: 1 }
 * ];
 * 
 * const total = TotalPrice(cart);
 * console.log(total); // 275.89
 */
const TotalPrice = (cartProducts) => {
  return Math.round(
    cartProducts.reduce((total, product) => {
      return total + (product.price * product.amount);
    }, 0) * 100
  ) / 100;
}

export { TotalPrice };
