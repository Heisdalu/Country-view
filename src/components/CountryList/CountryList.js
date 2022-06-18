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
import "./CountryList.css";

const initialState = {
  generalData: [],
  presentCount: 20,
  mainData: [],
  isintersectLoading: false,
};

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
    };
  }

  if (action.type === "ADD_CONTENT" && stopCount) {
    return {
      generalData: state.generalData,
      mainData: state.generalData,
      presentCount: state.presentCount,
      isintersectLoading: true,
    };
  }

  return initialState;
};

const CountryList = (props) => {
  let data = useContext(DataContext);
  const elemRef = useRef();

  const mainData = useMemo(() => {
    const result = data.sort((a, b) => {
      const first_Elem = a.name.common.toUpperCase();
      const second_Elem = b.name.common.toUpperCase();
      if (first_Elem < second_Elem) return -1;
      if (first_Elem > second_Elem) return 1;
      return 0;
    });

    return result;
  }, [data]);

  initialState.generalData = mainData;
  initialState.mainData = mainData.slice(0, 20);
  const [dataState, dispatchDataAction] = useReducer(dataReducer, initialState);
  const objFunc = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setTimeout(() => {
        dispatchDataAction({
          type: "ADD_CONTENT",
          presentLimit: 20,
        });
      }, 1000);
    }
  };

  const obj = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };
  const elemObserve = new IntersectionObserver(objFunc, obj);

  const info = dataState.mainData.map((el, i) => (
    <CountryInfo data={el} key={i} />
  ));

  useEffect(() => {
    if (!dataState.isintersectLoading) {
      elemObserve.observe(elemRef.current);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="country__list">{info}</section>
      {!dataState.isintersectLoading && (
        <span ref={elemRef} className="intersect">
          {<Loading />}
        </span>
      )}
    </>
  );
};

export default CountryList;
