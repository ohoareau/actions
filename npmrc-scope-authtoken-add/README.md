# .npmrc Scope Auth-Token Add javascript action

This action add a scope auth-token in the ~/.npmrc file.

## Inputs

### `scope`

**Required** The name of scope.

### `token`

**Required** The token.

### `registry`

**Required** The registry.

## Outputs

None. (setting the `env` env var)

## Example usage

    uses: ohoareau/actions/npmrc-scope-authtoken-add
