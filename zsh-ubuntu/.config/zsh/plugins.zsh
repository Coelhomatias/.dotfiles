# Plugin Management using zap

# Install Completions
plug "conda-incubator/conda-zsh-completion"

# Initialize completion and prompt system
autoload -Uz compinit && compinit
autoload -U promptinit && promptinit

# Install plugins
plug "Aloxaf/fzf-tab"
# plug "Freed-Wu/fzf-tab-source"
plug "zsh-users/zsh-autosuggestions"
plug "zsh-users/zsh-syntax-highlighting"
plug "MichaelAquilina/zsh-you-should-use"
# plug "zsh-users/zsh-history-substring-search"
