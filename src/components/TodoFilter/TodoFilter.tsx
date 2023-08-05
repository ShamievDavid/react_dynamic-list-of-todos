import { Status } from '../../enum/Status';

type Props = {
  setFilteredBy: (status: Status) => void,
  setQuery: (query: string) => void,
  query: string,
};

export const TodoFilter:React.FC<Props> = ({
  setFilteredBy,
  setQuery,
  query,
}) => (
  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          onChange={(event) => setFilteredBy(event.target.value as Status)}
        >
          <option
            value={Status.ALL}
          >
            All
          </option>

          <option
            value={Status.ACTIVE}
          >
            Active
          </option>
          <option value={Status.COMPLETED}>Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      {query && (
        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={() => setQuery('')}
          />
        </span>
      )}

    </p>
  </form>
);