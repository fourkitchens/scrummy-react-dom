import test from "ava";
import sinon from "sinon";
import { mapDispatchToProps, mapStateToProps } from "../../src/containers/Card";

test("Vote mapDispatchToProps", t => {
  const VOTE = "5";
  const dispatch = sinon.spy();
  mapDispatchToProps(dispatch, { value: VOTE }).onVote();
  t.true(dispatch.calledOnce);
});

test("Vote mapStateToProps true", t => {
  const state = {
    game: {
      nickname: "flip",
      votes: { flip: "5" }
    }
  };
  const ownProps = { value: "5" };
  t.true(mapStateToProps(state, ownProps).selected);
});

test("Vote mapStateToProps false", t => {
  const state = {
    game: {
      nickname: "flip",
      votes: { flip: "5" }
    }
  };
  const ownProps = { value: "13" };
  t.false(mapStateToProps(state, ownProps).selected);
});
