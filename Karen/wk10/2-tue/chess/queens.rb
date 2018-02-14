class Queens

  attr_reader :white, :black, :board #these attributes need to be available
                                    # to read for all methods in class

  def initialize(args={}) #location args are optional; expected in hash format
    @white = args[:white] || [0,3]  #variable is either given value for :white key or default; to set value you need to add @ in front of var name
    @black = args[:black] || [7,3]
    @board = draw_board
    raise ArgumentError, 'Queens cannot occupy same space' if white == black
  end

  def to_s
    board.collect { |row| row.join(' ')}.join("\n")
  end

  def draw_board
    board = blank_board
    board[white[0]][white[1]] = 'W'
    board[black[0]][black[1]] = 'B'
    board
  end

  def attack?
    row_attack? || col_attack? || diagonal_attack?
  end

  private

  def row_attack?
    white[0] == black[0]
  end

  def col_attack?
    white[1] == black[1]
  end

  def diagonal_attack?
    (white[0]-black[0]).abs == (white[1]-black[1]).abs
  end

  def blank_board
    8.times.collect {Array.new(8, 'O')}
  end

end
