import sp from 'utils/pnp';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';
// import '@pnp/sp/items/get-all'
import '@pnp/sp/files';
import '@pnp/sp/folders';
import { TDocumentLibraryFile, TPnPParams } from './PnP.Types';

export const addListItem = async <T extends {}>(data: T, listName: string) => {
  const result = await sp.web.lists
    .getByTitle(listName)
    .items.add(data)
    .then((res) => {
      return res.data;
    });
  return result;
};

export const updateListItem = async <T extends {}>(
  data: T,
  itemId: number,
  listName: string
) => {
  const result = await sp.web.lists
    .getByTitle(listName)
    .items.getById(itemId)
    .update(data)
    .then((res) => {
      return res;
    });
  return result;
};

export const deleteListItem = async (itemId: number, listName: string) => {
  await sp.web.lists.getByTitle(listName).items.getById(itemId).delete();
};

export const getAllListItem = async <T>(listName: string): Promise<T> => {
  const items = (await sp.web.lists.getByTitle(listName).items.getAll()) as T;
  return items;
};

/**
 * get list items by filter
 * @method getListItemByFilter
 * @param listName - List Name
 * @param pnpParams - object contains select,expand and filter
 * @return []
 */
export const getListItemByFilter = async <T>(
  listName: string,
  pnpParams: TPnPParams
): Promise<T> => {
  const { select, expand, filter } = pnpParams;
  const items = await sp.web.lists
    .getByTitle(listName)
    .items.select(select)
    .expand(expand)
    .filter(filter)
    .getAll();
  return items as T;
};

export const addFileToDocumentLibrary = async (
  fileInfo: TDocumentLibraryFile
) => {
  try {
    const result = await sp.web
      .getFolderByServerRelativeUrl(fileInfo.folderRelativeUrl)
      .files.add(
        fileInfo.url,
        fileInfo.content,
        fileInfo.parameters?.Overwrite
      );
    return result;
  } catch (error) {
    console.log({ error });
  }
};

export const batchAddItemstoList = async <T extends {}[]>(
  data: T,
  listName: string
) => {
  let list = sp.web.lists.getByTitle(listName);
  const entityTypeFullName = await list.getListItemEntityTypeFullName();
  const batch = sp.web.createBatch();
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    list.items.inBatch(batch).add(element, entityTypeFullName);
  }
  await batch.execute().then((result) => {
    console.log(' res', result);
  });
};
export const batchUpdateListItems = async <T extends ({} & { Id: number })[]>(
  data: T,
  listName: string
) => {
  const batch = sp.web.createBatch();
  const list = sp.web.lists.getByTitle(listName);
  const entityTypeFullName = await list.getListItemEntityTypeFullName();

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    list.items
      .getById(element.Id)
      .inBatch(batch)
      .update(element, '*', entityTypeFullName);
  }
  await batch
    .execute()
    .then((result) => {
      console.log('item added successfully');
    })
    .catch((err) => console.log(err));
};

export const batchDeleteListItems = async <T extends ({} & { Id: number })[]>(
  data: T,
  listName: string
) => {
  let batch = sp.web.createBatch();
  const list = sp.web.lists.getByTitle(listName);
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    list.items.getById(element.Id).inBatch(batch).delete();
  }
  await batch.execute().then((result) => {
    console.log('item deleted successfully');
  });
};

export const getUsersByGroupId = async (id: number) =>
  await sp.web.siteGroups.getById(id).users();
