const MyCart = require("./../models/MyCartModel");

exports.getMyCart = async (req, res) => {
  try {
    const userId = req.user._id;
    let mycart = await MyCart.findOne({ userID: userId }).populate({
      path: "products.productID", 
      select: "name newPrice img",
    });

    if (!mycart) {
      mycart = await MyCart.create({
        userID: userId,
        products: [],
      });
    }

    res.status(200).json({
      status: "success",
      data: mycart,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.AddToMyCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const productId = req.body.id;

    // Vérifier si le panier existe
    let cart = await MyCart.findOne({ userID: userId });

    if (!cart) {
      // Si pas de panier → on en crée un
      cart = new MyCart({
        userID: userId,
        products: [{ productID: productId, quantity: 1 }],
      });
    } else {
      // Vérifier si le produit est déjà dans le panier
      const productIndex = cart.products.findIndex(
        (p) => p.productID.toString() === productId
      );

      if (productIndex > -1) {
        // Si déjà présent → augmenter la quantité
        cart.products[productIndex].quantity += 1;
      } else {
        // Sinon → ajouter un nouveau produit
        cart.products.push({ productID: productId, quantity: 1 });
      }
    }

    // Sauvegarder
    await cart.save();

    res.status(200).json({
      status: "success",
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.RemoveFromMyCart = async (req, res) => {
  try {
    const userId = req.user._id;    
    const productId = req.body.id;   

    const cart = await MyCart.findOneAndUpdate(
      { userID: userId },
      { $pull: { products: { productID: productId } } },
      { new: true } 
    ).populate("products.productID", "name newPrice img");;

    if (!cart) {
      return res.status(404).json({ status: "fail", message: "Cart not found" });
    }

    return res.status(200).json({
      status: "success",
      message: "Product removed",
      data: cart,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error removing product",
      error: error.message,
    });
  }
};



