import React from "react";
import TVPresenter from "./TVPresenter";
import { tv } from "../../api";

export default class TVContainer extends React.Component {
  state = {
    loading: true,
    topRated: null,
    popular: null,
    airingToday: null,
    error: null
  };

  async componentDidMount() {
    let topRated, popular, airingToday, error;
    try {
      ({
        data: { results: topRated }
      } = await tv.getTopRated());
      ({
        data: { results: popular }
      } = await tv.getPopular());
      ({
        data: { results: airingToday }
      } = await tv.getAiringToday());
    } catch {
      error = "Can't get TV Shows.";
    } finally {
      this.setState({
        topRated,
        popular,
        airingToday,
        error,
        loading: false
      });
    }
  }

  render() {
    const { loading, topRated, popular, airingToday } = this.state;
    return (
      <TVPresenter
        loading={loading}
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
      />
    );
  }
}
