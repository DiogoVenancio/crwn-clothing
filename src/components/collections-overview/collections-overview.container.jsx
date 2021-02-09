import { connect } from 'react-redux';
import { compose } from 'redux'

import { createStructuredSelector } from 'reselect';

import CollectionsOverview from './collections-overview.components';

import { selectCollectionFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;