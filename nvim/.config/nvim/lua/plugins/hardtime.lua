return {
  "m4xshen/hardtime.nvim",
  dependencies = { "MunifTanjim/nui.nvim", "nvim-lua/plenary.nvim" },
  event = "VeryLazy",
  config = function()
    require("hardtime").setup()

    local keymap = vim.keymap

    keymap.set('n', "<leader>hh", ":Hardtime toggle<CR>", { desc = "Toggle the Hardtime plugin" })
  end
}
