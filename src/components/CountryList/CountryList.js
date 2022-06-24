import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import DataContext from "../../context/data-context";
import Loading from "../Error/Loading";
import CountryInfo from "./CountryInfo";
import Error from "../Error/Error";
import "./CountryList.css";

const initialState = {
  generalData: [],
  presentCount: 20,
  mainData: [],
  isintersectLoading: false,
  error: false,
};
//infinite scroll
const dataReducer = (state, action) => {
  // when to remove the loading_gif and stop loading baecuse it has reached the end of the array.
  const stopCount =
    state.presentCount + action.presentLimit > state.generalData.length - 1;

  if (action.type === "ADD_CONTENT" && !stopCount) {
    const count = state.presentCount + action.presentLimit;
    state.presentCount = count;

    return {
      generalData: state.generalData,
      mainData: state.generalData.slice(0, state.presentCount),
      presentCount: state.presentCount,
      isintersectLoading: false,
      error: false,
    };
  }

  if (action.type === "ADD_CONTENT" && stopCount) {
    return {
      generalData: state.generalData,
      mainData: state.generalData,
      presentCount: state.presentCount,
      isintersectLoading: true,
      error: false,
    };
  }
  if (action.type === "INITIAL_LOAD") {
    const isintersectLoading = action.mainData.length === 0 ? true : false;

    return {
      generalData: action.data,
      mainData: action.mainData,
      isintersectLoading: isintersectLoading,
      presentCount: 20,
      error: false,
    };
  }

  return initialState;
};

const CountryList = (props) => {
  let dataCtx = useContext(DataContext);
  const elemRef = useRef();
  const [dataState, dispatchDataAction] = useReducer(dataReducer, initialState);

  useMemo(() => {
    const result = dataCtx.data.sort((a, b) => {
      const first_Elem = a.name.common.toUpperCase();
      const second_Elem = b.name.common.toUpperCase();
      if (first_Elem < second_Elem) return -1;
      if (first_Elem > second_Elem) return 1;
      return 0;
    });

    dispatchDataAction({
      type: "INITIAL_LOAD",
      generalData: dataCtx.generalData,
      mainData: result.slice(0, 20),
      presentCount: 20,
      data: dataCtx.data,
    });

    return result;
  }, [dataCtx]);

  const objFunc = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setTimeout(() => {
        dispatchDataAction({
          type: "ADD_CONTENT",
          presentLimit: 20,
          data: dataCtx.data,
        });
      }, 1000);
    }
  };

  const obj = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };
  const elemObserve = new IntersectionObserver(objFunc, obj);

  const error = dataState.generalData.length === 0;
  const info = dataState.mainData.map((el, i) => (
    <CountryInfo data={el} key={i} />
  ));

  useEffect(() => {
    if (!dataState.isintersectLoading) {
      elemObserve.observe(elemRef.current);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dataState.isintersectLoading]);

  return (
    <>
      {!error && <section className="country__list">{info}</section>}
      {!dataState.isintersectLoading && (
        <span ref={elemRef} className="intersect">
          {<Loading />}
        </span>
      )}
      {error && (
        <div className="countryList_error">
          <Error />
          <p className="try_again">Search again...</p>
        </div>
      )}
    </>
  );
};

export default CountryList;
