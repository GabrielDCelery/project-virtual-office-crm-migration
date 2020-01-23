import React, { useState, useCallback } from 'react';
import _ from 'lodash';

const _paginationHelper = ({
  currentPage,
  numOfRecordsPerPage,
  totalNumOfRecords
}) => {
  const startAt = currentPage * numOfRecordsPerPage;
  let endAt = startAt + numOfRecordsPerPage;
  endAt = totalNumOfRecords <= endAt ? totalNumOfRecords : endAt;

  return { startAt, endAt };
};

export default ToWrapComponent => {
  let ActionableDataTableBehaviour = props => {
    const {
      columnConfigs,
      items,
      handleActionForSelecteds,
      handleActionForClicked
    } = props;
    const [currentPage, setCurrentPage] = useState(0);
    const [numOfRecordsPerPage, setNumOfRecordsPerPage] = useState(10);
    const [checkedItems, setCheckedItems] = useState([]);

    const getters = {
      pagination: {
        currentPage,
        numOfRecordsPerPage,
        numOfTotalRecords: items.length
      },
      dataTable: {
        columnConfigs,
        itemsToShow: useCallback(() => {
          const { startAt, endAt } = _paginationHelper({
            currentPage,
            numOfRecordsPerPage,
            totalNumOfRecords: items.length
          });

          return items.slice(startAt, endAt);
        }, [currentPage, numOfRecordsPerPage, items]),
        isRowChecked: useCallback(
          id => {
            return checkedItems.includes(id);
          },
          [checkedItems]
        ),
        isHeadChecked: useCallback(() => {
          return (
            checkedItems.length !== 0 && checkedItems.length === items.length
          );
        }, [checkedItems, items]),
        isHeadIndeterminate: useCallback(() => {
          return (
            0 < checkedItems.length && checkedItems.length !== items.length
          );
        }, [checkedItems, items]),
        isSubmitDisabled: useCallback(() => {
          return checkedItems.length === 0;
        }, [checkedItems]),
        numOfSelected: useCallback(() => {
          return checkedItems.length;
        }, [checkedItems])
      }
    };

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {
      pagination: {
        setCurrentPage,
        setNumOfRecordsPerPage
      },
      dataTable: {
        toggleAllCheckedItems: useCallback(() => {
          if (
            checkedItems.length !== 0 &&
            checkedItems.length === items.length
          ) {
            setCheckedItems([]);

            return;
          }

          setCheckedItems(items.map(item => item['id']));
        }, [checkedItems, items, setCheckedItems]),
        toggleCheckedItem: useCallback(
          id => {
            const newCheckedItems = JSON.parse(JSON.stringify(checkedItems));

            newCheckedItems.includes(id)
              ? newCheckedItems.splice(newCheckedItems.indexOf(id), 1)
              : newCheckedItems.push(id);

            return setCheckedItems(newCheckedItems);
          },
          [checkedItems, setCheckedItems]
        ),
        handleActionForSelecteds: useCallback(() => {
          if (!handleActionForSelecteds) {
            return;
          }

          const itemsToAction = items.filter(item => {
            return checkedItems.includes(item['id']);
          });

          return handleActionForSelecteds(itemsToAction);
        }, [checkedItems, items, handleActionForSelecteds]),
        handleActionForClicked: useCallback(
          item => {
            if (!handleActionForClicked) {
              return;
            }

            return handleActionForClicked(item);
          },
          [handleActionForClicked]
        )
      }
    };

    const handler = (...paths) => {
      return _.get(handlers, paths);
    };

    return <ToWrapComponent {...props} {...{ getter, handler }} />;
  };

  return ActionableDataTableBehaviour;
};
