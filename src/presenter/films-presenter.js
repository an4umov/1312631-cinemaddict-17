import FilmsView from '../view/films-view';
import SortView from '../view/sort-view';
import FilmsListView from '../view/films-list-view';
import ShowMoreButtonView from '../view/show-more-button-view';
import FilmsListContainerView from '../view/films-list-container-view';
import FilmCardView from '../view/film-card-view';
import FilmsExtraView from '../view/films-extra-view';
import {render} from '../render.js';

export default class MoviesPresenter {
  filmsComponent = new FilmsView();
  filmsList = new FilmsListView();
  filmsListContainer = new FilmsListContainerView();
  filmsExtraListRated = new FilmsExtraView('Top rated');
  filmsExtraListCommented = new FilmsExtraView('Most commented');
  filmsListContainerRated = new FilmsListContainerView();
  filmsListContainerCommented = new FilmsListContainerView();

  init = (filmsContainer, heading) => {
    this.filmsContainer = filmsContainer;
    this.heading = heading;

    render(new SortView(), this.filmsContainer);
    render(this.filmsComponent, this.filmsContainer);
    render(this.filmsList, this.filmsComponent.getElement());
    render(this.filmsListContainer, this.filmsList.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.filmsListContainer.getElement());
    }

    render(new ShowMoreButtonView(), this.filmsList.getElement());

    render(this.filmsExtraListRated, this.filmsComponent.getElement());
    render(this.filmsListContainerRated, this.filmsExtraListRated.getElement());
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(), this.filmsListContainerRated.getElement());
    }

    render(this.filmsExtraListCommented, this.filmsComponent.getElement());
    render(this.filmsListContainerCommented, this.filmsExtraListCommented.getElement());
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(), this.filmsListContainerCommented.getElement());
    }
  };
}
