# Environment Variables

# Homebrew
export HOMEBREW_PREFIX="/home/linuxbrew/.linuxbrew"

# Editor
export EDITOR="nvim"
export VISUAL="nvim"

# Paths
export PATH="$HOME/bin:$HOME/.local/bin:$PATH"

# FZF Configuration
export FZF_DEFAULT_COMMAND="fd --min-depth=1 --max-depth=2 --hidden --strip-cwd-prefix --exclude .git"
# export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
# export FZF_ALT_C_COMMAND="fd --min-depth=1 --max-depth=2 --type=d --hidden --strip-cwd-prefix --exclude .git"

export FZF_DEFAULT_OPTS=" \
 --color=bg+:#313244,bg:#1e1e2e,spinner:#f5e0dc,hl:#f38ba8 \
 --color=fg:#cdd6f4,header:#f38ba8,info:#cba6f7,pointer:#f5e0dc \
 --color=marker:#b4befe,fg+:#cdd6f4,prompt:#cba6f7,hl+:#f38ba8 \
 --color=selected-bg:#45475a \
 --multi"

# # Preview command for FZF
# show_file_or_dir_preview="if [ -d {} ]; then eza --tree --color=always {} | head -200; else bat -n --color=always --line-range :500 {}; fi"

# export FZF_CTRL_T_OPTS="--preview '$show_file_or_dir_preview'"
# export FZF_ALT_C_OPTS="--preview 'eza --tree --color=always {} | head -200'"
