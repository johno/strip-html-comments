import test from 'ava'
import stripHtmlComments from './'

test('removes comments with new lines', t => {
  t.plan(1)

  t.same(stripHtmlComments('<span><!-- blah \n\n\n -->'), '<span>')
})

test('handles multiple comments', t => {
  t.plan(1)

  t.same(stripHtmlComments('<span><!-- --><!-- --></span>'), '<span></span>')
})

test('handles a comment with no body', t => {
  t.plan(1)

  t.same(stripHtmlComments('<span><!----></span>'), '<span></span>')
})

test('handles a comment with no spaces', t => {
  t.plan(1)

  t.same(stripHtmlComments('<span><!--foo--></span>'), '<span></span>')
})

test('does not strip invalid comments', t => {
  t.plan(1)

  t.same(stripHtmlComments('<span><!-- foo -></span>'), '<span><!-- foo -></span>')
})
