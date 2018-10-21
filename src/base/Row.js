const glareView = require('../util/glareView');

/**
 * Row: distribute children in a row
 *
 * <Row>
 *   <RowLeftAlign>
 *     <Text>1</Text>
 *     <Text>2</Text>
 *   <RowLeftAlign/>
 *   <RowCenterAlign>
 *     <Text>3</Text>
 *     <Text>4</Text>
 *   <RowCenterAlign/>
 *   <RowRightAlign>
 *     <Text>5</Text>
 *     <Text>6</Text>
 *   <RowRightAlign/>
 * </Row>
 */

const Row = glareView(({
  props,
  n,
  children
}) => {
  return n('div', {
    style: props.style.box
  }, [children]);
}, {
  id: 'Row',
  defaultProps: {}
});

const RowLeftAlign = glareView(({
  props,
  n,
  children
}) => {
  return n('div', {
    style: props.style.box
  }, [children]);
}, {
  id: 'RowLeftAlign'
});

module.exports = {
  Row,
  RowLeftAlign
};
