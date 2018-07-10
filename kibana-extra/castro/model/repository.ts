type RepositoryUri = string;

export interface Repository {
  /** In the form of git://github.com/lambdalab/lambdalab  */
  uri: RepositoryUri;
  /** Original Clone Url */
  url: string;
  name?: string;
  org?: string;
}

export interface FileTree {
  name: string;
  type: FileTreeItemType;

  /** Full Path of the tree, don't need to be set by the server */
  path?: string;  
  /** Children of the file tree, if it is undefined, then it's a file, if it is null, it means it is a 
   * directory and its children haven't been evaluated. */
  children?: FileTree[];
  sha1?: string;
}

enum FileTreeItemType {
  File, Directory, Submodule
}