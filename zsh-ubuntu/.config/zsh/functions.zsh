# Custom Functions

# # Use fd for listing path candidates in fzf
# _fzf_compgen_path() {
#     fd --hidden --min-depth=1 --max-depth=2 --exclude .git . "$1"
# }

# # Use fd to generate the list for directory completion
# _fzf_compgen_dir() {
#     fd --type=d --min-depth=1 --max-depth=2 --hidden --exclude .git . "$1"
# }

# # Advanced customization of fzf options via _fzf_comprun function
# _fzf_comprun() {
#     local command=$1
#     shift

#     case "$command" in
#         cd)           fzf --preview 'eza --tree --color=always {} | head -200' "$@" ;;
#         export|unset) fzf --preview "eval 'echo ${}'" "$@" ;;
#         ssh)          fzf --preview 'dig {}' "$@" ;;
#         *)            fzf --preview "$show_file_or_dir_preview" "$@" ;;
#     esac
# }
