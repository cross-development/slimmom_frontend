//Core
import { lazy } from 'react';

const routes = [
	{
		path: '/',
		label: 'Главная',
		exact: true,
		private: false,
		restricted: true,
		isNavigate: true,
		component: lazy(() => import('pages/HomePage' /* webpackChunkName: "home-page" */)),
	},
	{
		path: '/sign-up',
		label: 'Регистрация',
		exact: true,
		private: false,
		restricted: true,
		isNavigate: false,
		component: lazy(() => import('pages/SignUpPage' /* webpackChunkName: "sign-up-page"*/)),
	},
	{
		path: '/sign-in',
		label: 'Вход',
		exact: true,
		private: false,
		restricted: true,
		isNavigate: false,
		component: lazy(() => import('pages/SignInPage' /* webpackChunkName: "sign-in-page"*/)),
	},
	{
		path: '/diary',
		label: 'Дневник',
		exact: true,
		private: true,
		restricted: false,
		isNavigate: true,
		component: lazy(() => import('pages/DiaryPage' /* webpackChunkName: "diary-page"*/)),
	},
	{
		path: '/calculator',
		label: 'Калькулятор',
		exact: true,
		private: true,
		restricted: false,
		isNavigate: true,
		component: lazy(() => import('pages/CalculatorPage' /* webpackChunkName: "calc-page"*/)),
	},
];

export default routes;
