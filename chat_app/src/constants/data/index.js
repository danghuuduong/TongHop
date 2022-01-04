

// data chính-----------------------------
const dataQA = [
    {
        id: 1,
        title: "Disney Kids Readers Level 1 Pack Of 6 Disney ",
        prirce: 175000,
        star: 3.5,
        imgURl:
            "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_244718_1_5431.jpg",
    },
    {
        id: 2,
        title: "Disney Kids Readers Level 1 Pack Of 6",
        prirce: 1989000,
        star: 2,
        imgURl:
            "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/d/a/da-ngoai-thanh-thoi---tap-3.jpg",
    },
    {
        id: 3,
        title: "Disney Kids Readers Level 1 Pack Of 6",
        prirce: 37000,
        star: 2.5,
        imgURl:
            "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/k/o/komi_-nu-than-so-giao-tiep---tap-2.jpg",
    },
    {
        id: 4,
        title: "Pack Of 6Disney Kids Readers Level 1 Pack Of 6",
        prirce: 225000,
        star: 3.5,
        imgURl:
            "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_244718_1_5430.jpg",
    },
    {
        id: 5,
        title: "Disney Kids Readers Level 1 Pack Of 6",
        prirce: 89000,
        star: 3.5,
        imgURl:
            "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_244718_1_5429.jpg",
    },
    {
        id: 6,
        title: "Disney Kids Readers Level 1 Pack Of 6",
        prirce: 17000,
        star: 2,
        imgURl:
            "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_242791.jpg",
    },
    {
        id: 7,
        title: "Disney Kids Readers Level 1 Pack Of 6",
        prirce: 37000,
        star: 2.5,
        imgURl:
            "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/h/nha-co-5-nang-dau---tap-5.jpg",
    },
    {
        id: 8,
        title: "Disney Kids Readers Level 1 Pack Of 6",
        prirce: 5000,
        star: 3.5,
        imgURl:
            "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/8/9/8935244862676.jpg",
    },
    {
        id: 9,
        title: "Disney Kids Readers Level 1 Pack Of 6 Disney ",
        prirce: 69000,
        star: 4.5,
        imgURl: "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/f/u/fullmetal-alchemist---cang-gi_-kim-thu_t-s_---fullmetal-edition-t_p-12.jpg",
    },
    {
        id: 10,
        title: "Disney Kids Readers Level 1 Pack Of 6 Disney ",
        prirce: 14000,
        star: 4.5,
        imgURl: "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_221260_1.jpg",
    },

];
const data = {
    dataQA
}

// Pr quảng cáo 4 cái hình to hình Vuông-----------------------------
const dataPr = [
    { id: 1, Pr_Link: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2022/TrangMonthlySale_T122_bo1__310x210.jpg' },
    { id: 3, Pr_Link: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2022/TrangMonthlySale_T122_bo2__310x210.jpg' },
    { id: 2, Pr_Link: 'https://cdn0.fahasa.com/media/wysiwyg/CMS-PAGE/MangaComic/TGDQ/after1812/TGDQv4_310%20x%20210.png' },
    { id: 4, Pr_Link: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2022/TrangMonthlySale_T122_bo3__310x210.jpg' },
]

// Chỗ Flash Sale 6 cái nhỏ nhỏ tròn------------------------------------
const dataFl = [
    { id: 1, fl_title: "Flash Sale", fl_imgURL: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_flashsale.png" },
    { id: 2, fl_title: "Mã Giảm Giá", fl_imgURL: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_mgg.png" },
    { id: 3, fl_title: "Chợ Sách Cũ", fl_imgURL: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_PCSC.png" },
    { id: 4, fl_title: "Xu Hướng", fl_imgURL: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico-xuhuong.png" },
    { id: 5, fl_title: "Gợi Ý Cho Bạn", fl_imgURL: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_goiy.png" },
    { id: 6, fl_title: "Kinh Tế", fl_imgURL: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_kinhte.png" },
]
// Chỗ nội dung 2 Bấm chuyển-------------------------------------------------
const data_view2 = [

    {
        id: 1,
        the_loai: 'Sách Thiếu nhi giá Tốt',
        Link_img_Url: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2021/350X415.jpg',
        content: [
            {
                id: 1,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/8/9/8938537634233.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
            {
                id: 2,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_80561.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
            {
                id: 3,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_227103.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
            {
                id: 4,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_227103.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
        ]
    },
    {
        id: 2,
        the_loai: 'Văn Học',
        Link_img_Url: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2021/Tho-Bay-Mau-350x415.jpg',

        content: [

            {
                id: 1,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/9/7/9786049638343_2.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
            {
                id: 2,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_183948.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
            {
                id: 3,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_144859.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
            {
                id: 4,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/b/i/bia-tham-tu-ky-phat--ok-033333.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            }
        ]
    },
]
const data_view2_2 = [

    {
        id: 3,
        the_loai: 'Sách Thiếu Nhi bán chạy',
        Link_img_Url: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2021/tn351%20x%20416.png',
        content: [
            {
                id: 1,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_233291.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
            {
                id: 2,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_233289.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
            {
                id: 3,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/9/7/9786045698679.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
            {
                id: 4,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_229616.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
        ]
    },
    {
        id: 4,
        the_loai: 'Nhật ký Chú Bé Nhút Nhát',
        Link_img_Url: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2021/VanPhongPham_350x415.jpg',

        content: [

            {
                id: 1,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/9/7/9786045698662.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
            {
                id: 2,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_233287.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
            {
                id: 3,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_233290.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            },
            {
                id: 4,
                title: ' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
                LinkUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_233285.jpg',
                money: 87000,
                discount: '22%',
                star: 3,
                numberEvaluate: 13
            }
        ]
    },
]
export { dataPr, dataQA, dataFl, data_view2, data_view2_2 }
export default data;