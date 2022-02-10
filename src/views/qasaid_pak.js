import { Grid, Card, Container } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { connect } from "react-redux";
import React, { Component, lazy } from "react";
import "./qasaid_pak.css";
import ReactPaginate from "react-paginate";

const SearchHeader = lazy(() => import("../components/searchheader/Search.js"));
const PaginatedItems = lazy(() =>
  import("../components/paginatedresults/index")
);

class QasaidPak extends Component {
  state = {
    searchinput: "",
    qasaid: [
      {
        total: "1",
        book_name: "کلیات 4",
        title: "جعفرؐ اے عشق دیاں گالہیں ہِن میں وی عشق دا ہک چمکوری ہاں ",
        main_cat: "عارفانہ کلام",
        sub_cat: "عشق و مستی",
        language: "سرائیکی",
        sinf: "نظم",
        id: 45478,
        riasat_ali_and_other: [],
        media_link: [],
        video: [
          "https://www.youtube.com/watch?v=VkgLgKWhFrM&list=PLhB0kyTmzAf9S81D_1dE7lXJZr_o8e5Ta&index=10",
        ],
        stage: "06-Other-Audio/Nazmain-MP3/Meda-Rub-sohna-main-jhaley-yan.mp3",
        room: "06-Other-Audio/Nazmain-MP3/Meda-Rub-sohna-main-jhaley-yan-2.mp3",
        tarzain: [],
        pg_no: 731,
        written: [
          "Books_Search_Work\\\\Kulyat-4-Saraiki-Nazm-Kafi\\\\Kulyat-4-Saraiki-Nazm-Kafi_000748.jpg",
        ],
        search_cat: "poetry",
      },
      {
        total: "1",
        book_name: "کلیات 4",
        title: "جعفرؐ اے عشق دیاں گالہیں ہِن میں وی عشق دا ہک چمکوری ہاں ",
        main_cat: "عارفانہ کلام",
        sub_cat: "عشق و مستی",
        language: "سرائیکی",
        sinf: "نظم",
        id: 45478,
        riasat_ali_and_other: [],
        media_link: [],
        video: [
          "https://www.youtube.com/watch?v=VkgLgKWhFrM&list=PLhB0kyTmzAf9S81D_1dE7lXJZr_o8e5Ta&index=10",
        ],
        stage: "06-Other-Audio/Nazmain-MP3/Meda-Rub-sohna-main-jhaley-yan.mp3",
        room: "06-Other-Audio/Nazmain-MP3/Meda-Rub-sohna-main-jhaley-yan-2.mp3",
        tarzain: [],
        pg_no: 731,
        written: [
          "Books_Search_Work\\\\Kulyat-4-Saraiki-Nazm-Kafi\\\\Kulyat-4-Saraiki-Nazm-Kafi_000748.jpg",
        ],
        search_cat: "poetry",
      },
      {
        total: "1",
        book_name: "کلیات 4",
        title: "جعفرؐ اے عشق دیاں گالہیں ہِن میں وی عشق دا ہک چمکوری ہاں ",
        main_cat: "عارفانہ کلام",
        sub_cat: "عشق و مستی",
        language: "سرائیکی",
        sinf: "نظم",
        id: 45478,
        riasat_ali_and_other: [],
        media_link: [],
        video: [
          "https://www.youtube.com/watch?v=VkgLgKWhFrM&list=PLhB0kyTmzAf9S81D_1dE7lXJZr_o8e5Ta&index=10",
        ],
        stage: "06-Other-Audio/Nazmain-MP3/Meda-Rub-sohna-main-jhaley-yan.mp3",
        room: "06-Other-Audio/Nazmain-MP3/Meda-Rub-sohna-main-jhaley-yan-2.mp3",
        tarzain: [],
        pg_no: 731,
        written: [
          "Books_Search_Work\\\\Kulyat-4-Saraiki-Nazm-Kafi\\\\Kulyat-4-Saraiki-Nazm-Kafi_000748.jpg",
        ],
        search_cat: "poetry",
      },
    ],
    issorted: false,
    offset: 0,
    pg_count: "",
  };

  componentDidMount() {
    this.setState({ resultStatus: "true" });
    const recordsToDisplay = 100;
    const lenResults = this.props.qasaid.length;
    const newOffset = (1 * recordsToDisplay) % lenResults;
    var endOffset = newOffset + recordsToDisplay;
    // this.setState({qasaid:this.props.qasaid.slice(newOffset, endOffset)});
  }
  renderQasaid = () => {
    let i = 0;
    let qasaid = [];
    console.log(this.state.issorted);
    qasaid = this.state.qasaid;

    return <PaginatedItems items={qasaid} />;
  };

  GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  }
  sortPage = () => {
    this.setState({
      qasaid: this.props.qasaid.sort(this.GetSortOrder("pg_no")),
      issorted: true,
    });

    // array.sort(GetSortOrder("Experience"))
  };
  sortSinf = () => {
    this.setState({
      qasaid: this.props.qasaid.sort(this.GetSortOrder("sinf")),
      issorted: true,
    });

    // array.sort(GetSortOrder("Experience"))
  };
  sortSubcat = () => {
    this.setState({
      qasaid: this.props.qasaid.sort(this.GetSortOrder("sub_cat")),
      issorted: true,
    });
    // array.sort(GetSortOrder("Experience"))
  };
  sortCat = () => {
    this.setState({
      qasaid: this.props.qasaid.sort(this.GetSortOrder("main_cat")),
      issorted: true,
    });
    // array.sort(GetSortOrder("Experience"))
  };
  sortLang = () => {
    this.setState({
      qasaid: this.props.qasaid.sort(this.GetSortOrder("language")),
      issorted: true,
    });
    // array.sort(GetSortOrder("Experience"))
  };
  sortTitle = () => {
    this.setState({
      qasaid: this.props.qasaid.sort(this.GetSortOrder("title")),
      issorted: true,
    });
    // array.sort(GetSortOrder("Experience"))
  };
  sortBook = () => {
    this.setState({
      qasaid: this.props.qasaid.sort(this.GetSortOrder("book_name")),
      issorted: true,
    });
    // array.sort(GetSortOrder("Experience"))
  };

  handlePageClick = async (event) => {
    // console.log(event.selected)
    const newOffset = (await (event.selected * 100)) % this.props.qasaid.length;
    console.log(newOffset);
    await this.setState({ offset: newOffset });
  };

  handlePagination = (e, page) => {
    const recordsToDisplay = 100;
    const lenResults = this.props.qasaid.length;
    const newOffset = (page * recordsToDisplay) % lenResults;
    var endOffset = newOffset + recordsToDisplay;
    this.setState({ qasaid: this.props.qasaid.slice(newOffset, endOffset) });
  };

  render() {
    return (
      <Container>
        <Grid container id="qaseeda">
          <Grid item xs={12} sm={12} style={{ marginBottom: 20 }}>
            <SearchHeader id="hidden-true" />
          </Grid>

          <Grid xs={12} sm={12}>
            <Card id="qasaid-header">
              <Grid container className="row">
                <Grid
                  item
                  className="col"
                  xs={1}
                  md={1}
                  sm={1}
                  onClick={this.sortPage}
                >
                  <b>Written</b>
                  <img
                    src="https://icons.getbootstrap.com/assets/icons/sort-alpha-down.svg"
                    width="17px"
                    height="17px"
                  ></img>
                </Grid>

                <Grid
                  item
                  className="col"
                  xs={1}
                  md={1}
                  sm={1}
                  onClick={this.sortSinf}
                >
                  <b>Sinf</b>
                  <img
                    src="https://icons.getbootstrap.com/assets/icons/sort-alpha-down.svg"
                    width="17px"
                    height="17px"
                  ></img>
                </Grid>

                <Grid
                  item
                  className="col"
                  xs={1}
                  md={1}
                  sm={1}
                  onClick={this.sortSubcat}
                >
                  <b>Sub Category</b>
                  <img
                    src="https://icons.getbootstrap.com/assets/icons/sort-alpha-down.svg"
                    width="17px"
                    height="17px"
                  ></img>
                </Grid>
                <Grid
                  item
                  className="col"
                  xs={2}
                  md={2}
                  sm={2}
                  onClick={this.sortCat}
                >
                  <b>Main Category</b>
                  <img
                    src="https://icons.getbootstrap.com/assets/icons/sort-alpha-down.svg"
                    width="17px"
                    height="17px"
                  ></img>
                </Grid>
                <Grid
                  item
                  className="col"
                  xs={1}
                  md={1}
                  sm={1}
                  onClick={this.sortLang}
                >
                  <b>Language</b>
                  <img
                    src="https://icons.getbootstrap.com/assets/icons/sort-alpha-down.svg"
                    width="17px"
                    height="17px"
                  ></img>
                </Grid>
                <Grid
                  item
                  className="col"
                  xs={5}
                  md={5}
                  sm={5}
                  onClick={this.sortTitle}
                >
                  <b>Title</b>
                  <img
                    src="https://icons.getbootstrap.com/assets/icons/sort-alpha-down.svg"
                    width="17px"
                    height="17px"
                  ></img>
                </Grid>
                <Grid
                  item
                  className="col"
                  xs={1}
                  md={1}
                  sm={1}
                  onClick={this.sortBook}
                >
                  <b>Book</b>
                  <img
                    src="https://icons.getbootstrap.com/assets/icons/sort-alpha-down.svg"
                    width="17px"
                    height="17px"
                  ></img>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item id="poetry-results" xs={12} sm={12}>
            {this.renderQasaid()}
          </Grid>

          <Grid item xs={12} sm={12}>
            {/* <ReactPaginate
                        breakLabel="..."
                        nextLabel="Next >"
                        onPageChange={this.handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={Math.ceil(this.props.qasaid.length / 100)}
                        previousLabel="< Previous"
                        renderOnZeroPageCount={null}
                    /> */}
            <Pagination
              count={Math.ceil(this.props.qasaid.length / 100)}
              onChange={this.handlePagination}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { qasaid } = state;
  console.log("Qasaid", JSON.stringify(qasaid));
  return { qasaid };
};

export default connect(mapStateToProps)(QasaidPak);
