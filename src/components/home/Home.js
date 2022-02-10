import React, { Component, lazy } from "react";
import "./Home.css";
import { Button, TextField, Typography } from "@material-ui/core";
// import Search from '../search/Search'
import Grid from "@material-ui/core/Grid";
import { Autocomplete } from "@material-ui/lab";
import { fetchComboboxValues, searchQasaid } from "../../redux/actions";
import { connect } from "react-redux";
const Search = lazy(() => import("../search/Search"));

class Home extends Component {
  state = {
    type: "poetry",

    sinf: this.props.comboxValues[0].sinf,
    main_cat: this.props.comboxValues[0].main_cat,
    lang: this.props.comboxValues[0].lang,
    book: this.props.comboxValues[0].book,

    selectedSinf: "",
    selectedMainCat: "",
    selectedLang: "",
    selectedBook: "",

    comboBoxSearchCriteria: [
      { type: "" },
      { sinf: "" },
      { lang: "" },
      { book: "" },
      { main_cat: "" },
    ],
  };
  componentDidMount() {
    console.log(this.state.type, this.state.comboBoxSearchCriteria);
    this.props.fetchComboboxValues(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
  }

  handleTypeChange = async (_event, newInputValue) => {
    await this.setState({
      selectedSinf: "",
      selectedMainCat: "",
      selectedLang: "",
      selectedBook: "",
    });
    await this.setState({ type: newInputValue });
    await this.setState({
      comboBoxSearchCriteria: [
        { type: newInputValue },
        { sinf: this.state.selectedSinf },
        { lang: this.state.selectedLang },
        { book: this.state.selectedBook },
        { main_cat: this.state.selectedMainCat },
      ],
    });
    await this.props.fetchComboboxValues(
      newInputValue,
      this.state.comboBoxSearchCriteria
    );
    this.setState({
      sinf: this.props.comboxValues[0].sinf,
      main_cat: this.props.comboxValues[0].main_cat,
      lang: this.props.comboxValues[0].lang,
      book: this.props.comboxValues[0].book,
    });
  };

  handleSinfChange = async (_event, newInputValue) => {
    await this.setState({ selectedSinf: newInputValue });
    await this.setState({
      comboBoxSearchCriteria: [
        { type: this.state.type },
        { sinf: newInputValue },
        { lang: this.state.selectedLang },
        { book: this.state.selectedBook },
        { main_cat: this.state.selectedMainCat },
      ],
    });
    // console.log(this.state.comboBoxSearchCriteria)
    await this.props.fetchComboboxValues(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
    await this.setState({
      sinf: this.props.comboxValues[0].sinf,
      main_cat: this.props.comboxValues[0].main_cat,
      lang: this.props.comboxValues[0].lang,
      book: this.props.comboxValues[0].book,
    });
    await this.props.searchQasaid(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
    window.location.pathname = "/results";
  };

  handleCatChange = async (_event, newInputValue) => {
    await this.setState({ selectedMainCat: newInputValue });
    await this.setState({
      comboBoxSearchCriteria: [
        { type: this.state.type },
        { sinf: this.state.selectedSinf },
        { lang: this.state.selectedLang },
        { book: this.state.selectedBook },
        { main_cat: newInputValue },
      ],
    });
    // console.log(this.state.comboBoxSearchCriteria)
    await this.props.fetchComboboxValues(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
    await this.setState({
      sinf: this.props.comboxValues[0].sinf,
      main_cat: this.props.comboxValues[0].main_cat,
      lang: this.props.comboxValues[0].lang,
      book: this.props.comboxValues[0].book,
    });
    await this.props.searchQasaid(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
    window.location.pathname = "/results";
  };

  handleLangChange = async (_event, newInputValue) => {
    await this.setState({ selectedLang: newInputValue });
    await this.setState({
      comboBoxSearchCriteria: [
        { type: this.state.type },
        { sinf: this.state.selectedSinf },
        { lang: this.state.selectedLang },
        { book: this.state.selectedBook },
        { main_cat: this.state.selectedMainCat },
      ],
    });
    // console.log(this.state.comboBoxSearchCriteria)
    await this.props.fetchComboboxValues(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
    await this.setState({
      sinf: this.props.comboxValues[0].sinf,
      main_cat: this.props.comboxValues[0].main_cat,
      lang: this.props.comboxValues[0].lang,
      book: this.props.comboxValues[0].book,
    });
    await this.props.searchQasaid(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
    window.location.pathname = "/results";
  };

  handleBookChange = async (_event, newInputValue) => {
    // console.log(newInputValue)
    await this.setState({ selectedBook: newInputValue });
    await this.setState({
      comboBoxSearchCriteria: [
        { type: this.state.type },
        { sinf: this.state.selectedSinf },
        { lang: this.state.selectedLang },
        { book: this.state.selectedBook },
        { main_cat: this.state.selectedMainCat },
      ],
    });
    // console.log(this.state.comboBoxSearchCriteria)
    await this.props.fetchComboboxValues(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
    await this.setState({
      sinf: this.props.comboxValues[0].sinf,
      main_cat: this.props.comboxValues[0].main_cat,
      lang: this.props.comboxValues[0].lang,
      book: this.props.comboxValues[0].book,
    });
    await this.props.searchQasaid(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
    window.location.pathname = "/results";
  };
  resetCombobox = async () => {
    await this.setState({
      comboBoxSearchCriteria: [
        { type: this.state.type },
        { sinf: "" },
        { lang: "" },
        { book: "" },
        { main_cat: "" },
      ],
    });
    await this.props.fetchComboboxValues(
      this.state.type !== "" ? this.state.type : "poetry",
      [
        { type: this.state.type },
        { sinf: "" },
        { lang: "" },
        { book: "" },
        { main_cat: "" },
      ]
    );
    await this.setState({
      sinf: this.props.comboxValues[0].sinf,
      main_cat: this.props.comboxValues[0].main_cat,
      lang: this.props.comboxValues[0].lang,
      book: this.props.comboxValues[0].book,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="home">
        <div className="home__body">
          <Grid container spacing={1}>
            <Grid item md={2} xs={12}>
              <Autocomplete
                disablePortal
                size="small"
                id="combo-box-demo"
                options={["poetry", "books"]}
                onChange={this.handleTypeChange}
                value={this.state.type}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField variant="outlined" {...params} label="Type" />
                )}
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <Autocomplete
                disablePortal
                size="small"
                id="combo-box-demo"
                options={this.state.sinf}
                onChange={this.handleSinfChange}
                value={this.state.selectedSinf}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField variant="outlined" {...params} label="Sinf" />
                )}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <Autocomplete
                disablePortal
                size="small"
                fullWidth
                id="combo-box-demo"
                options={this.state.main_cat}
                value={this.state.selectedMainCat}
                onChange={this.handleCatChange}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    variant="outlined"
                    {...params}
                    label="Main Category"
                  />
                )}
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <Autocomplete
                disablePortal
                size="small"
                id="combo-box-demo"
                options={this.state.lang}
                value={this.state.selectedLang}
                onChange={this.handleLangChange}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField variant="outlined" {...params} label="Language" />
                )}
              />
            </Grid>
            
            <Grid item md={2} xs={12}>
              <Autocomplete
                disablePortal
                size="small"
                id="combo-box-demo"
                options={this.state.book}
                value={this.state.selectedBook}
                onChange={this.handleBookChange}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField variant="outlined" {...params} label="Book" />
                )}
              />
            </Grid>

            <Grid item md={1} xs={12}>
              <Button onClick={this.resetCombobox} variant="outlined">
                Reset
              </Button>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Typography variant="h1" className="logo">
                Alzaman
              </Typography>
              <div className="home_inputContainer">
                <Search />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { comboxValues } = state;
  console.log(comboxValues);
  comboxValues =
    comboxValues.length != 0
      ? comboxValues
      : [
          {
            sinf: ["none"],
            main_cat: ["none"],
            lang: ["none"],
            book: ["none"],
          },
        ];
  return { comboxValues };
};
export default connect(mapStateToProps, { fetchComboboxValues, searchQasaid })(
  Home
);
// export default Home;
