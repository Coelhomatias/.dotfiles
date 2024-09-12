local opt = vim.opt

opt.relativenumber = true
opt.number = true

-- tabs & indentation
opt.tabstop = 2		-- 2 spaces for tabs
opt.shiftwidth = 2 	-- 2 spaces for indent width
opt.expandtab = true	-- expand tab to spaces
opt.autoindent = true	-- copy indent from current line when starting

opt.wrap = false	-- do not wrap text when line bigger than window

-- search settings
opt.ignorecase = true	-- ignore case when searching
opt.smartcase = true	-- if you include mixed case in your search,
			-- assumes you want case-sensitive

opt.cursorline = true 	-- highlight the line where cursor is currently

opt.termguicolors = true	-- flag to ensure 24-bit colors, needs true color terminal
opt.background = "dark"		-- colorschemes that can be light or dark will be made dark
opt.signcolumn = "yes" 		-- show sign column so that text doesn't shift

opt.splitright = true	-- split vertical window to the right
opt.splitbelow = true	-- split horizontal window to the bottom
