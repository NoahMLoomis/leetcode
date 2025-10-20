class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function dfs(root: TreeNode | null, leaves: number[]) {
  if (root !== null) {
    if (root.left === null && root.right === null) {
      leaves.push(root.val)
    }
    dfs(root.left, leaves)
    dfs(root.right, leaves)
  }
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leaves1 = []
  const leaves2 = []
  dfs(root1, leaves1)
  dfs(root2, leaves2)
  return (leaves1.length === leaves2.length && leaves1.every((v, i) => v === leaves2[i]))
};
