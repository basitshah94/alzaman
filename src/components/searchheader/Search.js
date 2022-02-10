import React, { Component } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import {
  Container,
  Grid,
  Radio,
  TextField,
  Typography,
  Paper,
  Input,
} from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import {
  setQasaidSearchTerm,
  setSearchTerm,
  setSearchCategory,
  setLogo,
  fetchComboboxValues,
  searchQasaid,
} from "../../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Autocomplete } from "@material-ui/lab";
// import path from "../../assets/alzamanlogo/"

class Search extends Component {
  state = {
    input: this.props.searchTerm,
    radioValue: this.props.searchCategory,
    type: "poetry",
    sinf: this.props.comboxVal[0].sinf,
    main_cat: this.props.comboxVal[0].main_cat,
    lang: this.props.comboxVal[0].lang,
    book: this.props.comboxVal[0].book,

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
  search = async (e) => {
    e.preventDefault();

    await this.props.setSearchCategory(this.state.type);
    await this.props.setQasaidSearchTerm(this.state.input);
    await this.props.setSearchTerm(this.state.input);
    await this.props.searchQasaid();
  };
  componentDidMount() {
    this.props.setLogo();
    // this.state.fetchComboboxValues
  }
  handleTypeChange = async (_event, newInputValue) => {
    await this.props.setSearchCategory(this.state.type);
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
      sinf: this.props.comboxVal[0].sinf,
      main_cat: this.props.comboxVal[0].main_cat,
      lang: this.props.comboxVal[0].lang,
      book: this.props.comboxVal[0].book,
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
    //  console.log(this.state.comboBoxSearchCriteria)
    await this.props.fetchComboboxValues(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
    await this.setState({
      sinf: this.props.comboxVal[0].sinf,
      main_cat: this.props.comboxVal[0].main_cat,
      lang: this.props.comboxVal[0].lang,
      book: this.props.comboxVal[0].book,
    });
    await this.props.searchQasaid(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
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
    //  console.log(this.state.comboBoxSearchCriteria)
    await this.props.fetchComboboxValues(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
    await this.setState({
      sinf: this.props.comboxVal[0].sinf,
      main_cat: this.props.comboxVal[0].main_cat,
      lang: this.props.comboxVal[0].lang,
      book: this.props.comboxVal[0].book,
    });
    await this.props.searchQasaid(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
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
    //  console.log(this.state.comboBoxSearchCriteria)
    await this.props.fetchComboboxValues(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
    await this.setState({
      sinf: this.props.comboxVal[0].sinf,
      main_cat: this.props.comboxVal[0].main_cat,
      lang: this.props.comboxVal[0].lang,
      book: this.props.comboxVal[0].book,
    });
    await this.props.searchQasaid(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
  };

  handleBookChange = async (_event, newInputValue) => {
    //  console.log(newInputValue)
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
    //  console.log(this.state.comboBoxSearchCriteria)
    await this.props.fetchComboboxValues(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
    await this.setState({
      sinf: this.props.comboxVal[0].sinf,
      main_cat: this.props.comboxVal[0].main_cat,
      lang: this.props.comboxVal[0].lang,
      book: this.props.comboxVal[0].book,
    });
    await this.props.searchQasaid(
      this.state.type,
      this.state.comboBoxSearchCriteria
    );
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
      sinf: this.props.comboxVal[0].sinf,
      main_cat: this.props.comboxVal[0].main_cat,
      lang: this.props.comboxVal[0].lang,
      book: this.props.comboxVal[0].book,
    });
  };

  render() {
    return (
      <>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item md={2} xs={12}>
            <Paper>
              <Link to="/">
                <img
                  src={
                    "../../assets/alzamanlogo/" + this.props.imgNumber + ".png"
                  }
                  alt="Logo"
                  height="45"
                ></img>
              </Link>
            </Paper>
          </Grid>

          <Grid item md={5} xs={12}>
            <Paper style={{ paddingTop: 7, paddingBottom: 7 }}>
              <Grid container direction="row">
                <Grid item xs={3}>
                  <FormControlLabel
                    value="both"
                    control={<Radio color="primary" />}
                    label="Both"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    value="poetry"
                    control={<Radio color="primary" />}
                    label="Poetry Books"
                  />
                </Grid>
                <Grid item xs={5}>
                  <FormControlLabel
                    value="books"
                    control={<Radio color="primary" />}
                    label="Other Books"
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item md={3} xs={12}>
            <Paper>
              <TextField
                fullWidth
                placeholder="بغیر اعراب اور صلوات کے اردو فونٹ میں لکھ کر سرچ کریں"
                variant="outlined"
              />
            </Paper>
          </Grid>

          <Grid item md={1} xs={8}>
            <Paper>
              <Button onClick={this.search} type="submit">
                Search
              </Button>
            </Paper>
          </Grid>

          <Grid item md={1} xs={4}>
            <Paper style={{ paddingTop: 6, paddingBottom: 6 }}>
              <Typography>0 results</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Paper
          style={{
            paddingLeft: 10,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 10,
          }}
        >
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={2} xs={6}>
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

            <Grid item md={2} xs={6}>
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

            <Grid item md={3} xs={6}>
              <Autocomplete
                disablePortal
                size="small"
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

            <Grid item md={2} xs={6}>
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

            <Grid item md={2} xs={9}>
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

            <Grid item md={1} xs={3}>
              <Button onClick={this.resetCombobox} variant="outlined">
                RESET
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    qasaidSearchTerm,
    searchTerm,
    qasaid,
    searchCategory,
    imgNumber,
    comboxValues,
  } = state;
  let resultCount = qasaid.length;
  let bookCount = 0;
  for (let i = 0; i < qasaid.length; i++) {
    if (qasaid[i].search_cat == "book") {
      bookCount = bookCount + 1;
    }
  }
  let poetryCount = resultCount - bookCount;
  let comboxVal =
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
  return {
    qasaidSearchTerm,
    searchTerm,
    resultCount,
    searchCategory,
    poetryCount,
    bookCount,
    imgNumber,
    comboxVal,
  };
};
export default connect(mapStateToProps, {
  setQasaidSearchTerm,
  searchQasaid,
  setSearchTerm,
  setSearchCategory,
  setLogo,
  fetchComboboxValues,
  setSearchCategory,
})(Search);
