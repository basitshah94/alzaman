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
      <form className="search">
        <Grid container>
          <Grid item xs={4} md={4} sm={4}>
            <Grid container>
              <Grid item xs={4} md={4} sm={4}>
                <Link to="/">
                  <img
                    src={
                      "../../assets/alzamanlogo/" +
                      this.props.imgNumber +
                      ".png"
                    }
                    alt="Logo"
                  ></img>
                </Link>
              </Grid>

              <Grid item xs={6} md={6} sm={6}>
                {/* <SearchIcon className="search__inputIcon" /> */}
                {/* <Input  placeHolder='بغیر اعراب اور صلوات کے اردو فونٹ میں لکھ کر سرچ کریں' id="outlined-basic" /> */}
                <TextField
                  className="search__input"
                  placeholder="بغیر اعراب اور صلوات کے اردو فونٹ میں لکھ کر سرچ کریں"
                  variant="outlined"
                />
                {/* <input value={this.state.input} */}
                {/* placeholder='بغیر اعراب اور صلوات کے اردو فونٹ میں لکھ کر سرچ کریں' onChange={(e) => this.setState({input:e.target.value})} /> */}
              </Grid>

              <Grid item className="search__buttons" xs={2} md={2} sm={2}>
                <Button onClick={this.search} type="submit" variant="outlined">
                  SEARCH
                </Button>
              </Grid>

              <Grid item xs={12} md={12} sm={12}>
                <RadioGroup
                  className="radioGroup"
                  value={this.state.radioValue}
                  onChange={(e) =>
                    this.setState({ radioValue: e.target.value })
                  }
                >
                  <Grid container>
                    <Grid item xs={4} sm={4}>
                      <FormControlLabel
                        value="both"
                        control={<Radio color="primary" />}
                        label="Both"
                      />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <FormControlLabel
                        value="poetry"
                        control={<Radio color="primary" />}
                        label="Poetry Books"
                      />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <FormControlLabel
                        value="books"
                        control={<Radio color="primary" />}
                        label="Other Books"
                      />
                    </Grid>
                  </Grid>
                </RadioGroup>
              </Grid>

            </Grid>
          </Grid>
          
          <Grid item xs={7} md={7} sm={7}>
            <Grid container>
              <Grid item xs={2} md={2} sm={2}>
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
              <Grid item xs={2} md={2} sm={2}>
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
              <Grid item xs={3} md={3} sm={3}>
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
              <Grid item xs={2} md={2} sm={2}>
                <Autocomplete
                  disablePortal
                  size="small"
                  id="combo-box-demo"
                  options={this.state.lang}
                  value={this.state.selectedLang}
                  onChange={this.handleLangChange}
                  // sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      variant="outlined"
                      {...params}
                      label="Language"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={2} md={2} sm={2}>
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
              <Grid item xs={1} md={1} sm={1}>
                <Button onClick={this.resetCombobox} variant="outlined">
                  RESET
                </Button>
              </Grid>
              <Grid item xs={12} md={12} sm={12}>
                <Typography>
                  S E A R C H&emsp;B Y&emsp;C A T E G O R Y
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={1} sm={12}>
            <div>
              <span>
                {this.props.resultCount > 1
                  ? this.props.resultCount + " results"
                  : this.props.resultCount + " result"}
              </span>
              <br />
              <span>
                {this.props.searchCategory == "both"
                  ? this.props.poetryCount + " Poetry Books"
                  : ""}
              </span>
              <br />
              <span>
                {this.props.searchCategory == "both"
                  ? this.props.bookCount + " Other Books"
                  : ""}
              </span>
            </div>
          </Grid>
        </Grid>
      </form>
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
