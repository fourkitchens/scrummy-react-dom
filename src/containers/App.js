import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as GameActions from "../actions";
import Logo from "../components/Logo";
import Readme from "../components/Readme";
import Footer from "../components/Footer";
import VotingResult from "../components/VotingResult";
import Hand from "../components/Hand";
import Message from "../components/Message";
import Login from "./Login";

const App = ({ watching, game, ui, actions }) => (
  <div>
    <Logo />
    {ui.signedIn
      ? <section id="container">
          <VotingResult
            users={game.users}
            votes={game.votes}
            revealed={ui.revealed}
            {...actions}
          />
          {!watching
            ? <Hand
                points={game.points}
                nickname={game.nickname}
                vote={actions.vote}
              />
            : ""}
        </section>
      : <section id="container">
          <Login />
          <Readme />
        </section>}
    <Footer />
    <Message message={game.message} showMessage={ui.showMessage} />
  </div>
);

App.propTypes = {
  watching: React.PropTypes.bool.isRequired,
  game: React.PropTypes.object.isRequired,
  ui: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

export const mapStateToProps = state => ({
  watching: state.game.users.some(
    user => user.watch && user.nickname === state.game.nickname
  ),
  game: state.game,
  ui: state.ui
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(GameActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
