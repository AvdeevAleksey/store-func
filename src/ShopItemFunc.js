function ShopItemFunc() {
    const currentItem = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
      }
      
    return (
        <div class="main-content">
            <h2>{currentItem.brand}</h2>
            <h1>{currentItem.title}</h1>
            <h3>{currentItem.description}d</h3>
                <div class="description">{currentItem.descriptionFull}</div>
                <div class="highlight-window mobile">
                    <div class="highlight-overlay"></div>
                </div>
                <div class="divider"></div>
                <div class="purchase-info">
                    <div class="price">{currentItem.currency}{currentItem.price}</div>
                    <button>Добавить в корзину</button>
                </div>
        </div>
    )
}

export default ShopItemFunc;