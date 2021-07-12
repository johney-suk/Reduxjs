const ItemService = () => {

    const items = [
        {name: "연필", price: 500, count :1},
        {name: "샤프", price: 2000, count :1},
        {name: "노트", price: 1000, count :1},
        {name: "지우개", price: 500, count :1},
        {name: "샤프심", price: 800, count :1},
        {name: "쫀드기", price: 600, count :1}
    ]

    const getItems = () => {
        return items
    }

    return {getItems:getItems}
}

export default ItemService()