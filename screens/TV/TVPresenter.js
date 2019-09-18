import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import Loader from "../../components/Loader";

const TVPresenter = ({ loading, topRated, popular, airingToday }) =>
  loading ? <Loader /> : <Text>TV</Text>;

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array
};

export default TVPresenter;
