import { GraphQLNonNull, GraphQLString } from 'graphql'
import { pagesType, pagesInputType } from '../../types/pages'
import PagesModel from '../../../models/pages'

export default {
  type: pagesType,
  description: 'Update a page',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    pageUpdate: { type: pagesInputType }
  },
  resolve(root, { id, pageUpdate }) {
    return PagesModel.findByIdAndUpdate(
      id,
      {
        name: pageUpdate.name,
        slug: pageUpdate.slug,
        class: pageUpdate.class,
        active: pageUpdate.active,
        page_title: pageUpdate.page_title,
        page_description: pageUpdate.page_description,
        parent: pageUpdate.parent,
        in_nav: pageUpdate.in_nav,
        title: pageUpdate.title,
        subtitle: pageUpdate.subtitle,
        body_copy: pageUpdate.body_copy,
        // components: pageUpdate.components
      },
      { new: true }
    ).exec()
      .catch(err => new Error(err))
  }
}
