let initialState = [
    {
        id: 1,
        name : " Iphone X",
        description : "Sản phẩm do Apple sản xuất",
        image :"https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png",
        price : 1000,
        iventory : 10,
        rating:5
    },
    {
        id: 2,
        name : " Samsung Galaxy Note 9",
        description : "Sản phẩm do Samsung sản xuất",
        image :"https://static.toiimg.com/photo/59980514/Samsung-Galaxy-Note-9.jpg",
        price : 1200,
        iventory : 15,
        rating:4
    },
    {
        id: 3,
        name : " Oppo F9",
        description : "Sản phẩm do tàu khựa sản xuất",
        image :"https://i1.wp.com/mobilecryptotech.com/wp-content/uploads/2018/08/IMG_20180815_134709.jpg?fit=1920%2C1920&ssl=1",
        price : 400,
        iventory : 20,
        rating:3
    }
]

const product = ( state = initialState , action ) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default product;