import MainLayout from "./MainLayout";

import {
    AttractionHomePage,
    AttractionDetailsPage,
    AttractionLandingPage,
    ComboLandingPage,
    SpecialOfferLandingPage,
    VisaLandingPage,
    BlogLandingPage,
    BlogDetailsPage,
    SearchingResultPage,
    PaymentPage
} from '../Pages/Hero'

const ThemeRoutes = [
    {
        path: "",
        element: (
            <MainLayout />
        ),
        children: [
            { path: "", element: <AttractionHomePage /> },
            { path: "/attraction", element: <AttractionLandingPage /> },
            { path: "/details/:id", element: <AttractionDetailsPage /> },
            { path: "/combo", element: <ComboLandingPage /> },
            { path: "/specialoffer", element: <SpecialOfferLandingPage /> },
            { path: "/visa", element: <VisaLandingPage /> },
            { path: "/blog", element: <BlogLandingPage /> },
            { path: "/blog/details", element: <BlogDetailsPage /> },
            { path: "/search/:slug", element: <SearchingResultPage /> },
            { path: "/payment/:id", element: <PaymentPage /> },
        ]
    },
]

export default ThemeRoutes