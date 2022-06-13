import ProfileView from './view/profile-view';
import MainNavView from './view/main-nav-view';
import FilmsPresenter from './presenter/films-presenter';
import FilmsStatisticsView from './view/films-statistics-view';
import FilmModalDetailsView from './view/film-modal-details-view';
import {RenderPosition} from './render.js';
import {render} from './render.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
const filmsPresenter = new FilmsPresenter();

render(new ProfileView(), siteHeaderElement);
render(new MainNavView(), siteMainElement);
render(new FilmsStatisticsView(), siteFooterStatisticsElement);
render(new FilmModalDetailsView(), siteFooterElement, RenderPosition.AFTEREND);

filmsPresenter.init(siteMainElement);
