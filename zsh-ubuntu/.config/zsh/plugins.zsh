# Plugin Management using zap

# Install plugins
plug "zsh-users/zsh-autosuggestions"
plug "zsh-users/zsh-syntax-highlighting"
plug "MichaelAquilina/zsh-you-should-use"
plug "zsh-users/zsh-history-substring-search"
plug "conda-incubator/conda-zsh-completion"

# Initialize completion and prompt system
autoload -Uz compinit && compinit
autoload -U promptinit && promptinit
