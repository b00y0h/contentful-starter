import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'

class FinancialAidIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <h2 className="section-headline">Financial Aid</h2>
        </div>
      </Layout>
    )
  }
}

export default FinancialAidIndex
