import {HomePage} from "./Page/HomePage/HomePage";
import {IRoute} from "./Service/NavigationUtil/Interface/INavigationUtil";
import {AboutPage} from "./Page/AboutPage/AboutPage";
import {IWordpressPage} from "./Model/WordpressPage/Interface/IWordpressPage";
import {IPageConstructor} from "./Page/Page/Interface/IPage";
import {LearnPage} from "./Page/LearnPage/LearnPage";
import {NewsPage} from "./Page/NewsPage/NewsPage";

function findPage (path: IWordpressPage): IPageConstructor {
	if (HomePage.testRoute(path.name)) return HomePage;
	if (AboutPage.testRoute(path.name)) return AboutPage;
	if (LearnPage.testRoute(path.name)) return LearnPage;
	if (NewsPage.testRoute(path.name)) return NewsPage;
	throw new ReferenceError(`Could not find a matching route for path: ${path.name}`);
}

export const Routes = (pages: IWordpressPage[]): IRoute[] => {
	return [
		{
			path: "/",
			title: "Fovea",
			page: HomePage
		},
		...pages.map(page => ({
			path: page.name,
			title: page.title,
			page: findPage(page)
		}))
	];
};