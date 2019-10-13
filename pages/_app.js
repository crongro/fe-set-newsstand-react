import App from 'next/app';
import Link from 'next/link';
import News from '../components/News';
import companyListFetcher from "../store/companyListFetcher";

class MyApp extends App {

  static async getInitialProps({ Component, ctx, pathname}) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const companyList = await companyListFetcher();

    return {pageProps, companyList};
  }

  render() {
    const { Component, pageProps, companyList} = this.props;
    return (
        <div>
          <News companyList={companyList}>
            <Component {...pageProps} />
          </News>
        </div>
    );
  }
}
export default MyApp;
