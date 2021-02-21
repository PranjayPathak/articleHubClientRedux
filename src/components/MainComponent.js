import React, { useState, useEffect } from "react";
import Navbarr from "./Navbar";
import Footer from "./Footer";
import {
  Route,
  Redirect,
  Switch,
  useHistory,
  useParams,
} from "react-router-dom";
import {
  fetchEconomicalArticle,
  fetchScienceArticle,
  fetchSportArticle,
  fetchTechnicalArticle,
} from "../redux/actionCreators";
import MainJumbotron from "./jumbotrons/MainJumbotron";
import EcoJumbotron from "./jumbotrons/EcoJumbotron";
import TechJumbotron from "./jumbotrons/TechJumbotron";
import SportJumbotron from "./jumbotrons/SportJumbotron";
import SciJumbotron from "./jumbotrons/SciJumbotron";
import Article from "./Article";
import Write from "./Write";
import Cardd from "./Card";
import Loading from "./Loading";
import Error from "./Error";
import HomeCard from "./HomeCard";
import firebase from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import "firebase/auth";
import axios from "../axios";
import { connect } from "react-redux";

firebase.initializeApp(firebaseConfig);

const Main = (props) => {
  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState(() => firebase.auth.currentUser);

  const history = useHistory();

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    try {
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          authenticate(result.credential.idToken, result.user);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log(user);
        setUser(user);
        localStorage.setItem("email", user.email);
        localStorage.setItem("accessToken", user.za);
        localStorage.setItem("name", user.displayName);
        updateAuthenticate(user.za, user.email);
      } else {
        setUser(false);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    // Cleanup subscription
    return unsubscribe;
  }, [initializing]);

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      setUser(false);
      localStorage.removeItem("email");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("name");
      history.push("/");
      console.log("signing out");
    } catch (error) {
      console.log(error.message);
    }
  };

  const authenticate = (idToken, user) => {
    const userData = {
      name: user.displayName,
      photoUrl: user.photoURL,
      accessToken: user.za,
      email: user.email,
    };
    // console.log(userData);
    // console.log(idToken);
    axios
      .post("/authenticate", { idToken: idToken, userData: userData })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const updateAuthenticate = (accessToken, email) => {
    // console.log(email);
    axios
      .post("/authenticate/update", { accessToken: accessToken, email: email })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const Home = (props) => {
    console.log(props);

    return (
      <>
        <MainJumbotron />
        <HomeCard />
      </>
    );
  };

  const Eco = (props) => {
    // props.fetchEconomicalArticle();
    // console.log(props.economical);

    useEffect(() => {
      console.log("useEffect in main");
      props.fetchEconomicalArticle();
      // console.log(props.economical);
    },[]);

    // if (props.economical.isLoading) {
    //   return <Loading />
    // }

    // if (props.economical.errMess) {
    //   return <Error errMess={this.props.economical.errMess} />
    // }

    return (
      <>
        {console.log(props)}
        <EcoJumbotron />
        {/* <Cardd data={props.economical.articles.data} topic={"economical"} /> */}
      </>
    );
  };

  const Tech = () => {
    var data = fetchTechnicalArticle();

    if (data.isLoading) {
      <Loading />;
    }

    if (data.errMess) {
      <Error errMess={data.errMess} />;
    }

    return (
      <>
        <TechJumbotron />
        <Cardd data={data.payload} topic={"technical"} />
      </>
    );
  };

  const Sport = () => {
    var data = fetchSportArticle();

    if (data.isLoading) {
      <Loading />;
    }

    if (data.errMess) {
      <Error errMess={data.errMess} />;
    }

    return (
      <>
        <SportJumbotron />
        <Cardd data={data.payload} topic={"sport"} />
      </>
    );
  };

  const Sci = () => {
    var data = fetchEconomicalArticle();

    if (data.isLoading) {
      <Loading />;
    }

    if (data.errMess) {
      <Error errMess={data.errMess} />;
    }

    return (
      <>
        <SciJumbotron />
        <Cardd data={data.payload} topic={"science"} />
      </>
    );
  };

  const Add = () => {
    return (
      <>
        {user && (
          <Write
            email={localStorage.getItem("email")}
            author={localStorage.getItem("name")}
            accessToken={localStorage.getItem("accessToken")}
          />
        )}
      </>
    );
  };

  const DetailedCard = () => {
    const [article, setArticle] = useState();
    const { topic, id } = useParams();
    const [alreadyLiked, setAlreadyLiked] = useState(false);
    const [alreadyDisliked, setAlreadyDisliked] = useState(false);
    const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    console.log(topic, id, article);

    useEffect(() => {
      console.log("inside useeffect");
      const email = localStorage.getItem("email");
      const accessToken = localStorage.getItem("accessToken");

      const config = {
        headers: {
          email: email,
          accessToken: accessToken,
        },
      };

      axios
        .get(`/${topic}/${id}`, config)
        .then((response) => {
          setArticle(response.data);
          // console.log(response.data);
          setIsLoading1(false);
        })
        .catch((err) => console.log(err));

      if (email) {
        axios
          .get(`user/${email}`, config)
          .then((response) => {
            if (response) {
              // console.log(response.data);
              setAlreadyLiked(response.data[0].likedArticleId.includes(id));
              setAlreadyDisliked(
                response.data[0].dislikedArticleId.includes(id)
              );
              setIsLoading2(false);
              // console.log(alreadyLiked, alreadyDisliked);
            }
          })
          .catch((err) => console.log(err));
      }
    }, []);

    if (isLoading1 || isLoading2) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    return (
      <Article
        article={article}
        alreadyLiked={alreadyLiked}
        alreadyDisliked={alreadyDisliked}
        setAlreadyDisliked={setAlreadyDisliked}
        setAlreadyLiked={setAlreadyLiked}
        topic={topic}
        email={localStorage.getItem("email")}
      />
    );
  };

  // useEffect((props) => {
  //   props.fetchEconomicalArticle();
  //   props.fetchScienceArticle();
  //   props.fetchTechnicalArticle();
  //   props.fetchSportArticle();
  // }, [])

  // console.log(props);

  return (
    <div>
      <Navbarr
        user={user}
        signInWithGoogle={signInWithGoogle}
        signOut={signOut}
      />
      <Switch history={history}>
        <Route exact path="/" component={() => Home(props)} />
        <Route exact path="/economical" component={() => Eco(props)} />
        <Route exact path="/technical" component={Tech} />
        <Route exact path="/sport" component={Sport} />
        <Route exact path="/science" component={Sci} />
        <Route exact path="/write" component={Add} />
        <Route exact path="/:topic/:id" component={DetailedCard} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    economical: state.economical,
    technical: state.technical,
    sport: state.sport,
    science: state.science,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEconomicalArticle: () => dispatch(fetchEconomicalArticle()),
    fetchTechnicalArticle: () => dispatch(fetchTechnicalArticle()),
    fetchSportArticle: () => dispatch(fetchSportArticle()),
    fetchScienceArticle: () => dispatch(fetchScienceArticle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
